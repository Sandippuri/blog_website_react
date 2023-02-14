import React from "react";
import Modal from "./modal";

const EditModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Edit Blog">
      <form className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1 font-medium">
          <label className=" text-sm text-gray-500">Your Name</label>
          <input className="input-field" type="text" />
        </div>
        <div className="flex flex-col gap-1 font-medium">
          <label className=" text-sm text-gray-500">Blog Title</label>
          <input className="input-field" type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <label className=" text-sm text-gray-500 font-medium">
            Cover Image
          </label>
          <input
            className="bg-white border border-gray-200 focus:border-primary focus:outline-none rounded file:p-2 file:bg-primary file:text-white file:border-none hover:file:bg-primary-dark"
            type="file"
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-sm text-gray-500 font-medium">Content</label>
          <textarea className="input-field" rows={7} />
        </div>
        <button className="btn-primary w-fit self-end">Save</button>
      </form>
    </Modal>
  );
};

export default EditModal;
