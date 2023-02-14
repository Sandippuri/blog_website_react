import React from "react";
import cn from "classnames";

const AddBlog = ({ className }) => {
  return (
    <>
      <form
        className={cn(
          className,
          "flex flex-col justify-start border border-gray-200 bg-[#fafafa] rounded-md  px-4 py-4 gap-4 "
        )}
      >
        {/* title */}
        <div className="flex flex-col gap-1 font-medium">
          <h1 className="text-3xl font-medium">Want to write blog ?</h1>
          <p className="text-md text-gray-500 ">
            Just fill up those fields and create your own blogs
          </p>
        </div>
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
        <button className="btn-primary">Add Blog</button>
      </form>
    </>
  );
};

export default AddBlog;
