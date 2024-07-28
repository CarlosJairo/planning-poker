import React from "react";
import "../../styles/organisms/Modal.css";
import UserForm from "./FormUser";

const Modal = ({ isOpen, setShowModal }) => {
  return (
    <article className={`modal-overlay ${isOpen && "is-active"}`} role="dialog">
      <div className="modal-content">
        <UserForm setShowModal={setShowModal} />
      </div>
    </article>
  );
};

export default Modal;
