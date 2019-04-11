import React from 'react';
import PropTypes from 'prop-types';

/**
 * A container for wrapping views of an authenticated user.
 * @export
 * @param {object} props The props object containing values that would be used
 * within this component.
 * @returns {array} The resulting JSX object
 */
export default function Wrapper({ children }) {
  return (
    <main className="main-body">
      <section className="wrapper min-vh-100">
        <div className="container">
          {children}
        </div>
      </section>
    </main>
  );
}


Wrapper.propTypes = {
  /** The content to display within the container */
  children: PropTypes.node.isRequired,
};
