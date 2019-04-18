import React from 'react';
import CommentBox from './CommentBox';
import PostComment from './PostComment';

export default function Comments() {
  return (
    <div className="comment-grp">
      <h4>25 comments</h4>
      <div className="card">
        <div className="card-body">
          <CommentBox />
          <div className="text-center loadmore-grp">
            <button type="button" className="btn btn-secondary">Load more...</button>
          </div>
          <PostComment />
        </div>
      </div>
    </div>

  );
}
