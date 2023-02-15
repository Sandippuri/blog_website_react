import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, user, content, postedTime, id, image }) => {
  return (
    <div className="w-full h-fit flex border border-gray-200 rounded-md px-4 py-4 gap-4 sm:flex-col lg:flex-row">
      <img
        className="w-full lg:w-1/3 rounded-md sm:order-1 object-cover"
        src={image}
        alt="blog_photo"
      />
      <div className="flex flex-col w-full gap-2 sm:order-1 ">
        <div className="flex items-center gap-2 sm:justify-start xl:justify-end ">
          <h3 className="text-gray-500 text-md font-medium">{user}</h3>
          <p className="text-gray-400 text-sm">
            {new Date(postedTime).toDateString()}
          </p>
        </div>
        <Link to={`/${id}`}>
          <h1 className="text-2xl font-medium flex-wrap">{title}</h1>
        </Link>
        <p className="text-md text-gray-500 flex-wrap">
          {content.substr(0, 400)}...
        </p>
        <Link to={`/${id}`}>
          <button className=" text-primary border-b border-dotted border-primary justify-end hover:text-primary-dark hover:border-primary-dark">
            read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
