/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to impor

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

/**
 * @class PageLoader - The loader component
 * @extends {React.Component}
 */
class PageLoader extends React.Component {
  /**
   * @static {propTypes} - Defining the type for the loading props
   * @memberof PageLoader
   */
  static propTypes = {
    isLoading: PropTypes.bool,
  }

  /**
   * @static {defaultProps} - Defining the default type for the isLoading props
   * @memberof PageLoader
   */
  static defaultProps = {
    isLoading: false,
  }

  /**
   *Creates an instance of PageLoader.
   * @param {*} props - The props passed in to the component
   * @memberof PageLoader
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: props.isLoading,
    };
  }

  /**
   * @returns {JSX} - The loading component
   * @memberof PageLoader
   */
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          sizeUnit="px"
          size={35}
          color="#8b01be"
          loading={this.state.loading}
        />
      </div>
    );
  }
}


export default PageLoader;
