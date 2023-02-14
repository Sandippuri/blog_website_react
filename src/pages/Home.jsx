import React from "react";
import AddBlog from "../components/addBlog";
import BlogContent from "../components/blogContent";

const Home = () => {
  return (
    <>
      <div className="layout-px flex gap-5 py-5 sm:flex-col lg:flex-row">
        <BlogContent className=" sm:order-2 sm:w-full lg:order-1 lg:w-2/3" />
        <AddBlog className=" sm:order-1 sm:w-full lg:order-2 lg:w-1/3" />
      </div>
    </>
  );
};

export default Home;
