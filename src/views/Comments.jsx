import React from 'react';

export default function Comments() {
  return (
    <div className="comment-grp">
      <h4>25 comments</h4>
      <div className="card">
        <div className="card-body">

          <div className="text-center loadmore-grp">
            <button type="button" className="btn btn-secondary">Load more...</button>
          </div>
          <form className="form">
            <div className="form-group">
              <input className="form-control" placeholder="Leave a comment" name="comment" />
              <button type="submit" className="btn btn-link">
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
