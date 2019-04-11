import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description - returns all author's or selected author's
 * @param {props} authors - all authors
 * @param {props} begin - start of range of author's to select
 * @param {props} end - end of range of author's to select
 * @param {props} follow - follow feature
 * @return {JSX}
 */
const Authors = ({ authors, begin, end, follow }) => {
  return (
    <div className="container">
      <div className="row">
        {
          authors.length > 0 ?
            authors.slice(begin, end).map((author, index) => {
              return <div className="col-sm-6 col-lg-4" key={index} >
                <div className="author">
                  <img alt="author" src={author.authorsProfile.image} />
                  <div data-pg-collapsed >
                    <h4>{author.authorsProfile.firstname} {author.authorsProfile.lastname}</h4>
                    <p>{author.authorsProfile.bio}</p>
                    <button
                      onClick={follow}
                      className="transition btn"
                    >
                      Follow
                        </button>
                  </div>
                </div>
              </div>;
            }) : ''
        }
      </div>
    </div>
  );
};

Authors.propTypes = {
  authors: PropTypes.array,
  begin: PropTypes.number,
  end: PropTypes.number,
  follow: PropTypes.func,
};

export default Authors;
