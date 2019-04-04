/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Modal(props) {
  const { clearMessage } = props;
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal_content">
          <div className="cancelTop">
            <button onClick={clearMessage} type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal_body">
            <div className="modal_header">
              <h4 className="modal_title">Recover Password!</h4>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
