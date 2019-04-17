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
  let { message, isLoading, token } = props;

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

  const submitHandler = (event) => {
    event.preventDefault();
     console.log('--->', formData);
     const requestData = {
       formData,
       token,
     };
    //props.createArticleAction(formData);
    props.createArticleAction(requestData);
  };

  const cloudinaryUpdate = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

  const imageUploadHandler = () => {
    // console.log('yo mama');
    // const { showLoader } = this.props;
    // showLoader(true);
    if (widget === undefined) {
      widget = new CloudinaryWidget(
        cloudinaryUpdate, (error) => {
        return (error);
      }, false);
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
    />
  );
}

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.getCreateArticleLoadingState,
    message: selectors.getCreateArticleMessageState,
    token: selectors.getUserToken,
  }
);

export default connect(mapStateToProps, { createArticleAction })(CreateArticleContainer);
