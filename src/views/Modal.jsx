/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

/**
 * Modal component
 * @param {object} props Component props
 * @param {function} props.passwordResetRequest action creator function
 * @returns {import('@babel/types').JSXAttribute}
 */

function Modal(props) {
  const { clearMessage, title } = props;
  return (
    <div className="modal" id="myModal" onClick={clearMessage}>
      <div className="modal-dialog">
        <div
          className="modal_content"
          onClick={(event) => {
            event.stopPropagation();
            return clearMessage('modalContent');
          }}>
          <div className="cancelTop">
            <button onClick={clearMessage} type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal_body">
            <div className="modal_header">
              <h4 className="modal_title">{title}</h4>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

