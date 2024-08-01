import React from "react";
import "../../styles/organisms/Modal.css";

const Modal = ({ children, isOpen }) => {
  return (
    <article className={`modal-overlay ${isOpen && "is-active"}`} role="dialog">
      <div className="modal-content">{children}</div>
    </article>
  );
};

export default Modal;
