import React from "react";
import cn from "classnames";
import Card from "./card";

const BlogContent = ({ className }) => {
  return (
    <>
      <div className={cn(className, "flex flex-col gap-5")}>
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Our Top blogs</h1>
          <input className="input-field" placeholder="Search" type="text" />
        </div>
        <Card />
      </div>
    </>
  );
};

export default BlogContent;
