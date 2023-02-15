import React, { useState } from "react";
import cn from "classnames";
import { usePostBlogMutation } from "../rtk/apiSlices/blogApi";

const AddBlog = ({ className }) => {
  const [postBlog] = usePostBlogMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog({
      title: title,
      content: content,
      photo: photo,
      user: user,
    })
      .unwrap()
      .then((response) => {
        console.log(response);
      });

    setTitle("");
    setContent("");
    setPhoto("");
    setUser("");
  };

  return (
    <>
      <form
        className={cn(
          className,
          "flex flex-col justify-start border border-gray-200 bg-[#fafafa] rounded-md  px-4 py-4 gap-4 h-fit"
        )}
        onSubmit={handleSubmit}
      >
        {/* title */}
        <div className="flex flex-col gap-1 font-medium">
          <h1 className="text-3xl font-medium">Want to write blog ?</h1>
          <p className="text-md text-gray-500 ">
            Just fill up those fields and create your own blogs
          </p>
        </div>
        <div className="flex flex-col gap-1 font-medium">
          <label htmlFor="user" className=" text-sm text-gray-500">
            Your Name
          </label>
          <input
            className="input-field"
            id="user"
            name="user"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>
        <div className="flex flex-col gap-1 font-medium">
          <label htmlFor="title" className=" text-sm text-gray-500">
            Blog Title
          </label>
          <input
            className="input-field"
            id="title"
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="photo" className=" text-sm text-gray-500 font-medium">
            Cover Image Link
          </label>
          <input
            className="input-field"
            type="text"
            id="photo"
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="content"
            className=" text-sm text-gray-500 font-medium"
          >
            Content
          </label>
          <textarea
            className="input-field"
            rows={7}
            id="content"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />
        </div>
        <button className="btn-primary">Add Blog</button>
      </form>
    </>
  );
};

export default AddBlog;
