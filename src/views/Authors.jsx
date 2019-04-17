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
const Authors = ({
  authors, begin, end, follow
}) => (
  <div className="container">
    <div className="row">
      {
          authors.length > 0
            ? authors.slice(begin, end).map((author) => {
              const { firstname, lastname } = author.authorsProfile;
              return (
                <div className="col-sm-6 col-lg-4" key={author.id}>
                  <div className="author">
                    <img alt="author" src={author.authorsProfile.image} />
                    <div data-pg-collapsed>
                      <h4>{`${firstname} ${lastname}`}</h4>
                      <p>{author.authorsProfile.bio}</p>
                      <button
                        onClick={follow}
                        className="transition btn"
                        type="button"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              );
            }) : ''
        }
    </div>
  </div>
);

Authors.propTypes = {
  authors: PropTypes.array,
  begin: PropTypes.number,
  end: PropTypes.number,
  follow: PropTypes.func,
};

Authors.defaultProps = {
  authors: [],
  begin: 1,
  end: 10,
  follow: f => f,
};

export default Authors;
