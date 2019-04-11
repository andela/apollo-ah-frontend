/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import CreateArticle from '../../views/CreateArticle';

function CreateArticleContainer(props) {
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    body: null,
    categoryId: null,
    tagList: [],
    image: '',
  });

  const updateInputHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const updateBodyHandler = (event, editor) => {
    const data = editor.getData();
    // console.log({ event, editor, data });
    setFormData({ ...formData, body: data });
  };

  const updateTagHandler = (tags) => {
    console.log('===>', tags);
    const listOfTags = [];
    tags.forEach(tag => {
      listOfTags.push(tag.text);
      setFormData({ ...formData, tagList: listOfTags });
    });
  };

  const createArticleHandler = (event) => {
    event.preventDefault();
    const payload = new FormData(event.target);
  };
  console.log(formData, '-->');
  return (
    <CreateArticle
      createArticleHandler={createArticleHandler}
      updateInputHandler={updateInputHandler}
      updateBodyHandler={updateBodyHandler}
      updateTagHandler={updateTagHandler}
    />
  );
}

export default CreateArticleContainer;
