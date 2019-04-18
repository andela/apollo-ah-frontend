/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors/createArticleSelector';
import createArticleAction from '../actions/createArticles';
import CreateArticle from '../views/CreateArticle';
import CloudinaryWidget from './common/CloudinaryWidget';


/**
 * Form for creating a new article
 * @param {object} props Component props
 * @param {function} props.createArticleAction action creator function
 */
function CreateArticleContainer(props) {
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    body: null,
    categoryId: null,
    tagList: [],
    image: null,
  });

  /** passing global state loading as props into variables */
  const {
    message, isLoading, token,
  } = props;

  let widget;

  const updateInputHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const updateBodyHandler = (value) => {
    setFormData({ ...formData, body: value });
  };

  const updateTagHandler = (tags) => {
    const listOfTags = [];
    tags.forEach(tag => {
      listOfTags.push(tag.text);
      setFormData({ ...formData, tagList: listOfTags });
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const requestData = {
      formData,
      token,
    };
    await props.createArticleAction(props, requestData);
  };

  const cloudinaryUpdate = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

  const imageUploadHandler = () => {
    if (widget === undefined) {
      widget = new CloudinaryWidget(
        cloudinaryUpdate, (error) => (error), false
      );
    }
    widget.open();
  };

  console.log('--->', isLoading);
  console.log('==->', message);

  return (
    <CreateArticle
      updateInputHandler={updateInputHandler}
      updateBodyHandler={updateBodyHandler}
      updateTagHandler={updateTagHandler}
      imageUploadHandler={imageUploadHandler}
      submitHandler={submitHandler}
      valueText={formData.body}
      isLoading={isLoading}
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

export default connect(mapStateToProps, { createArticleAction })(CreateArticleContainer);
