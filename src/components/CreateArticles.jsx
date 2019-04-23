import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors/createArticleSelector';
import createArticleAction from '../actions/createArticles';
import resetMessageAction from '../actions/clearMessage';
import CreateArticle from '../views/CreateArticle';
import CloudinaryWidget from './common/CloudinaryWidget';

/**
 * Form for creating a new article
 * @param {object} props Component props
 * @param {function} props.createArticleAction action creator function
 */
function CreateArticleContainer(props) {
  /** passing global state loading as props into variables */
  const {
    message, isLoading, token
  } = props;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    body: '',
    categoryId: '',
    tagList: [],
    image: '',
  });

  useEffect(() => {
    props.resetMessageAction();
  }, []);

  let widget;

  /** handling changes to form input */
  function updateInputHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  /** handling changes to the article editor input */
  function updateBodyHandler(value) {
    setFormData({ ...formData, body: value });
  }

  /** handling changes to the tags */
  function updateTagHandler(tags) {
    const listOfTags = [];
    tags.forEach((tag) => {
      listOfTags.push(tag.text);
      setFormData({ ...formData, tagList: listOfTags });
    });
  }

  /** handling the sumit event */
  async function submitHandler(event) {
    event.preventDefault();
    const requestData = {
      formData,
      token,
    };
    await props.createArticleAction(props, requestData);
  }

  /** updating state with the cloudinary url */
  const cloudinaryUpdate = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

  /** handling the cloudinary upload */
  function imageUploadHandler() {
    if (widget === undefined) {
      widget = new CloudinaryWidget(
        cloudinaryUpdate, error => (error), false
      );
    }
    widget.open();
  }

  return (
    <CreateArticle
      updateInputHandler={updateInputHandler}
      updateBodyHandler={updateBodyHandler}
      updateTagHandler={updateTagHandler}
      imageUploadHandler={imageUploadHandler}
      submitHandler={submitHandler}
      valueText={formData.body}
      isLoading={isLoading}
      responseMessage={message}
    />
  );
}

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.getCreateArticleLoading,
    message: selectors.getCreateArticleMessage,
    token: selectors.getUserToken,
  }
);
export default connect(
  mapStateToProps,
  {
    createArticleAction,
    resetMessageAction
  }
)(CreateArticleContainer);
