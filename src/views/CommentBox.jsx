import React from 'react';
import { PropTypes } from 'prop-types';
import LikeComment from '../components/LikeComment';


/**
 * Creates the JSX element used to display a single comment
 * @param {object} props The component props
 * date - Short format representation of the date the comment was made
 * body - The comment body
 * authorImage - The profile image of the  user
 * authorName - The firstname or username of the user
 * fullDate - Long format representation of the date the comment was made
 * @returns {Node} The generated JSX element
 */
export default function CommentBox({
  date,
  body,
  authorImage,
  authorName,
  fullDate,
  id,
  articleSlug,
  // handleLikes,
  // handleDislikes,
  likeCount,
  dislikeCount
}) {
  return (
    <div className="article-author">
      <img src={authorImage} alt={authorName} />
      <div className="comment-info">
        <h6>{authorName}</h6>
        <span title={fullDate}>{date}</span>
        <p>{body}</p>
      </div>
      <LikeComment
        id={id}
        slug={articleSlug}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
      />
    </div>

  );
}

/** Prop types declaration */
CommentBox.propTypes = {
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  fullDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  articleSlug: PropTypes.string.isRequired,
  // handleLikes: PropTypes.func.isRequired,
  // handleDislikes: PropTypes.func.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
};
