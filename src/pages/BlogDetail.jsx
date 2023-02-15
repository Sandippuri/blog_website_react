import React, { useState } from "react";
import EditModal from "../components/modal/editModal";
import DeleteModal from "../components/modal/deleteModal";
import { useLocation } from "react-router-dom";
import { useGetBlogbyIdQuery } from "../rtk/apiSlices/blogApi";
import { useDeleteBlogMutation } from "../rtk/apiSlices/blogApi";

const BlogDetail = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);
  const { data } = useGetBlogbyIdQuery(path);
  const [deletePost] = useDeleteBlogMutation();
  const [editModalRequestOpen, seteditModalRequestOpen] = useState(false);
  const [deleteModalRequestOpen, setDeleteModalRequestOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full layout-px py-5 gap-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col order-2 md:order-1 gap-2">
            <h1 className="text-3xl font-medium">{data?.title}</h1>
            <div className="flex gap-4">
              <p className="text-md font-normal text-gray-400">{data?.user}</p>
              <p className="text-md text-gray-400">
                {new Date(data?.createdAt).toDateString()}
              </p>
            </div>
          </div>
          <div className="flex h-fit gap-4 order-1 md:order-2">
            <button
              className="btn-primary"
              onClick={() => seteditModalRequestOpen(true)}
            >
              Edit
            </button>
            <button
              className="btn-outlined hover:border-red-500 hover:text-red-500"
              onClick={() => setDeleteModalRequestOpen(true)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="md:w-full lg:w-3/5 flex flex-col gap-4 ">
          <img
            className="w-full object-cover"
            src={data?.photo}
            alt="blog_image"
          />
          <p className="text-md">{data?.content}</p>
        </div>
      </div>

      <EditModal
        isOpen={editModalRequestOpen}
        closeModal={() => seteditModalRequestOpen(false)}
        id={path}
      />
      <DeleteModal
        isOpen={deleteModalRequestOpen}
        closeModal={() => setDeleteModalRequestOpen(false)}
        onClick={() => deletePost(data?._id).then(window.location.replace("/"))}
      />
    </>
  );
};

export default BlogDetail;
