/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

function CreateArticle(props) {
  return (
    <section className="wrapper min-vh-100">
      <div className="container">
        <header className="page-header" data-pg-collapsed>
          <h1> New Article</h1>
        </header>
        <div className="card mb-5 mt-n5">
          <form role="form" className="form p-sm-4 p-3 form-borderless">
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="title" className="font-weight-bold">Title</label>
              <input type="text" className="form-control text-capitalize" id="title" name="title" required />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="description" className="font-weight-bold">Short Description</label>
              <textarea className="form-control textarea-sm" id="description" name="description" />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label htmlFor="description" className="font-weight-bold">Details</label>
              <textarea className="form-control" id="body" name="body" />
            </div>
            <div className="form-group mb-4" data-pg-collapsed>
              <label className="font-weight-bold" htmlFor="category">Category</label>
              <select className="custom-select" name="category" id="category">
                <option selected value="-1">-- Choose one --</option>
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
              <input type="text" className="form-control" id="tags" name="tags" data-role="tagsinput" />
            </div>
            <div className="form-group mb-4">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="custom-file1" />
                <label className="custom-file-label" htmlFor="custom-file1">Upload cover image</label>
              </div>
            </div>
            <button type="submit" className="btn btn-brand btn-plain mt-3">Publish article</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateArticle;
