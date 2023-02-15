import React, { useState } from "react";
import cn from "classnames";
import Card from "./card";
import { useGetBlogsQuery } from "../rtk/apiSlices/blogApi";

const BlogContent = ({ className }) => {
  const { data } = useGetBlogsQuery();
  const [search, setSearch] = useState("");

  const filteredData = data?.filter((blog) => {
    return blog.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className={cn(className, "flex flex-col gap-5")}>
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Our Top blogs</h1>
          <input
            className="input-field"
            placeholder="Search by title"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {data?.length === 0 ? (
          <div className="flex flex-col justify-between gap-2">
            <h1 className="text-2xl font-semibold text-gray-800 text-center">
              Blogs not found
            </h1>
            <p className="text-md text-gray-400 text-center">
              Please upload blogs
            </p>
          </div>
        ) : (
          filteredData?.map((blog) => {
            return (
              <Card
                key={blog._id}
                id={blog._id}
                title={blog.title}
                content={blog.content}
                image={blog.photo}
                user={blog.user}
                postedTime={blog.createdAt}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default BlogContent;
