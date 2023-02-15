import React, { useState, useEffect } from "react";
import Modal from "./modal";
import {
  useGetBlogbyIdQuery,
  useUpdateBlogMutation,
} from "../../rtk/apiSlices/blogApi";

const EditModal = ({ isOpen, closeModal, id }) => {
  const { data } = useGetBlogbyIdQuery(id);
  const [updateBlog] = useUpdateBlogMutation();
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    if (data) {
      setEditedData(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog({
      id,
      title: editedData.title,
      content: editedData.content,
      photo: editedData.photo,
      user: editedData.user,
    });
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Edit Blog">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-1 font-medium">
          <label className=" text-sm text-gray-500">Your Name</label>
          <input
            className="input-field"
            type="text"
            value={editedData?.user}
            onChange={(e) =>
              setEditedData({ ...editedData, user: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1 font-medium">
          <label className=" text-sm text-gray-500">Blog Title</label>
          <input
            className="input-field"
            type="text"
            value={editedData?.title}
            onChange={(e) =>
              setEditedData({ ...editedData, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className=" text-sm text-gray-500 font-medium">
            Cover Image
          </label>
          <input
            className="input-field"
            type="text"
            value={editedData?.photo}
            onChange={(e) =>
              setEditedData({ ...editedData, photo: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-sm text-gray-500 font-medium">Content</label>
          <textarea
            className="input-field"
            rows={7}
            value={editedData?.content}
            onChange={(e) =>
              setEditedData({ ...editedData, content: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn-primary w-fit self-end">
          Save
        </button>
      </form>
    </Modal>
  );
};

export default EditModal;
