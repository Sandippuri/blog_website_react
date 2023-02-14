import React, { useState } from "react";
import EditModal from "../components/modal/editModal";
import DeleteModal from "../components/modal/deleteModal";

const BlogDetail = () => {
  const [editModalRequestOpen, seteditModalRequestOpen] = useState(false);
  const [deleteModalRequestOpen, setDeleteModalRequestOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full layout-px py-5 gap-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col order-2 md:order-1">
            <h1 className="text-3xl font-medium">
              A better Blogger experience on the web
            </h1>
            <p className="text-md text-gray-400">February 13, 2023</p>
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
          <div className="w-full h-[50vh] bg-gray-400"></div>
          <p className="text-md">
            Since 1999, millions of people have expressed themselves on Blogger.
            From detailed posts about almost every apple variety you could ever
            imagine to a blog dedicated to the art of blogging itself, the
            ability to easily share, publish and express oneself on the web is
            at the core of Blogger’s mission. As the web constantly evolves, we
            want to ensure anyone using Blogger has an easy and intuitive
            experience publishing their content to the web. That’s why we’ve
            been slowly introducing an improved web experience for Blogger. Give
            the fresh interface a spin by clicking “Try the New Blogger” in the
            left-hand navigation pane.In addition to a fresh feel, Blogger is
            now responsive on the web, making it easier to use on mobile
            devices. By investing in an improved web platform, it allows the
            potential for new features in the future.Learn more about the
            page-specific updates we’ve released to make your Blogger experience
            even better
          </p>
        </div>
      </div>

      <EditModal
        isOpen={editModalRequestOpen}
        closeModal={() => seteditModalRequestOpen(false)}
      />
      <DeleteModal
        isOpen={deleteModalRequestOpen}
        closeModal={() => setDeleteModalRequestOpen(false)}
      />
    </>
  );
};

export default BlogDetail;
