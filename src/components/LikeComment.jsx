import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postLikeComment, postDislikeComment } from '../actions/likeCommentsAction';
// import debounceFn from '../utils/debounce';

class LikeComment extends React.Component {
  static propTypes = {
    postLikeComment: PropTypes.func.isRequired,
    postDislikeComment: PropTypes.func.isRequired,
  }

  state = {
    likeCount: 0,
    dislikeCount: 0,
    id: '',
    slug: '',
    clickedLike: false,
    clickedDislike: false,
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      likeCount, dislikeCount, id, slug,
    } = nextProps;
    if (likeCount < prevState.likeCount) return null;
    if (dislikeCount < prevState.dislikeCount) return null;
    return {
      likeCount, dislikeCount, id, slug,
    };
  }

  handleLikes = () => {
    const { id, slug, clickedLike } = this.state;
    if (!clickedLike) this.setState(prevState => ({ likeCount: prevState.likeCount + 1 }));
    if (clickedLike) this.setState(prevState => ({ likeCount: prevState.likeCount - 1 }));
    const { postLikeComment: likeComment } = this.props;
    this.setState(prevState => ({ clickedLike: !prevState.clickedLike }));
    likeComment({ id, slug });
  }

  handleDislikes = () => {
    const { clickedDislike, id, slug } = this.state;
    if (!clickedDislike) this.setState(prevState => ({ dislikeCount: prevState.dislikeCount + 1 }));
    if (clickedDislike) this.setState(prevState => ({ dislikeCount: prevState.dislikeCount - 1 }));
    const { postDislikeComment: dislikeComment } = this.props;
    this.setState(prevState => ({ clickedDislike: !prevState.clickedDislike }));
    dislikeComment({ id, slug });
  }

  render() {
    const { likeCount, dislikeCount } = this.state;
    return (
      <div className="like-comment-parent">
        <div>
          <i
            className="fas fa-thumbs-up"
            onClick={this.handleLikes}
            role="button"
            aria-hidden
          />
          {<span>{likeCount}</span>}
        </div>
        <div>
          <i
            className="fas fa-thumbs-down"
            onClick={this.handleDislikes}
            role="button"
            aria-hidden
          />
          {<span>{dislikeCount}</span>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { postDislikeComment, postLikeComment };

export default connect(() => { }, mapDispatchToProps)(LikeComment);
// export default LikeComment;
