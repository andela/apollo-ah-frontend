/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import TagsInput from './TagsInput';

function CreateArticle(props) {
  const { createArticleHandler, updateInputHandler, updateBodyHandler } = props;

  const handleUpdate = (updatedTags) => {
    props.updateTagHandler(updatedTags);
  };

  const tagsUpdateHandler = (updatedTags) => {
    handleUpdate(updatedTags);
  };

  return (
    <section className="wrapper min-vh-100">
      <div className="container">
        <header className="page-header" data-pg-collapsed>
          <h3>New Article</h3>
        </header>
        <div className="card mb-5">
          <form className="form p-sm-4 p-3 form-borderless" onSubmit={createArticleHandler}>
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="title" className="font-weight-bold">Title</label>
              <input type="text" className="form-control text-capitalize" id="title" name="title" onChange={updateInputHandler} required />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="description" className="font-weight-bold">Short Description</label>
              <textarea className="form-control textarea-sm" id="description" name="description" onChange={updateInputHandler} required />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="description" className="font-weight-bold">Details</label>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Tell your story...</p>"
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}

                onChange={updateBodyHandler}
                onBlur={editor => {
                  console.log('Blur.', editor);
                }}
                onFocus={editor => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label className="font-weight-bold" htmlFor="category">Category</label>
              <select onChange={updateInputHandler} defaultValue="DEFAULT" className="custom-select" name="categoryId" id="category">
                <option value="DEFAULT">-- Choose one --</option>
                <option value="3">Business</option>
                <option value="7">Entertainment</option>
                <option value="4">Fashion</option>
                <option value="6">Food</option>
                <option value="5">Health</option>
                <option value="8">History</option>
                <option value="1">Technology</option>
                <option value="2">Sports</option>
                <option value="9">Others</option>
              </select>
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label className="font-weight-bold" htmlFor="tags">Tags (optional)</label>
              <TagsInput tagsUpdateHandler={tagsUpdateHandler} />
            </div>
            <div className="form-group mb-4">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="custom-file1" />
                <label className="custom-file-label" htmlFor="custom-file1">Upload cover image</label>
              </div>
            </div>
            <button type="submit" style={{ backgroundColor: 'purple', color: 'white' }} className="btn btn-brand btn-plain mt-3">Publish article</button>
          </form>
        </div>
      </div>
    </section>
  );
}

CreateArticle.propTypes = {
  /** Called when the publish article button is clicked */
  createArticleHandler: PropTypes.func.isRequired,
  /** watches for an input update */
  updateInputHandler: PropTypes.func.isRequired,
  /** watches for an input update */
  updateBodyHandler: PropTypes.func.isRequired,
};

export default CreateArticle;
