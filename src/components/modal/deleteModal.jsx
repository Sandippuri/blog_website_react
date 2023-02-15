import React from "react";
import Modal from "./modal";

const DeleteModal = ({ isOpen, closeModal, ...rest }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Delete Blog"
      className="w-fit"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Do you really want to delete this blog?</h3>
        <button className="btn-primary w-fit self-end" {...rest}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
