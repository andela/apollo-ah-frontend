import React from 'react';

export default function CommentLoader() {
  return (
    <div className="comment-loader">
      <div className="pg-empty-placeholder comment-loader-img" />
      <div className="pg-empty-placeholder comment-loader-name" />
      <div className="pg-empty-placeholder comment-loader-name comment-loader-time" />
      <div className="pg-empty-placeholder comment-loader-name comment-loader-text" />
      <div className="pg-empty-placeholder comment-loader-name comment-loader-text comment-loader-text-sm" />
    </div>
  );
}
