import React from "react";
import "./Modal.css";

export const Modal = ({ show, close }) => {
  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={close}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};
