import React from "react";
import Modal from "./modal";

const DeleteModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Delete Blog"
      className="w-fit"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Do you really want to delete this post?</h3>
        <button className="btn-primary w-fit self-end">Delete</button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
