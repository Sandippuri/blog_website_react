import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit flex border border-gray-200 rounded-md px-4 py-4 gap-4 sm:flex-col xl:flex-row">
      <div className="w-1/3 bg-gray-300 rounded-md sm:order-1"></div>
      <div className="flex flex-col w-full gap-2 sm:order-1 sm">
        <div className="flex items-center gap-2 sm:justify-start xl:justify-end ">
          <h3 className="text-gray-500 text-md font-medium">Sandip Puri</h3>
          <p className="text-gray-400 text-sm">7 min ago</p>
        </div>
        <h1 className="text-2xl font-medium flex-wrap">
          A better Blogger experience on the web
        </h1>
        <p className="text-md text-gray-500 flex-wrap">
          Since 1999, millions of people have expressed themselves on Blogger.
          From detailed posts about almost every apple variety you could ever
          imagine to a blog dedicated to the art of blogging itself, the ability
          to easily share, publish and express oneself on the web is at the core
          of Blogger’s mission. As the web constantly. evolves, we want to
          ensure anyone using Blogger has an easy and intuitive experience
          publishing using Blogger has an easy and intuitive experience
          publishing their content to the web.   That’s why we’ve been slowly
          introducing an improved web experience for Blogger. Give the fresh
          interface a spin by clicking “Try the New Blogger” in the left-hand
          navigation pane... 
        </p>
        <button
          onClick={() => navigate("/blogdetails")}
          className="text-primary  border-b border-dotted border-primary w-fit justify-end hover:text-primary-dark hover:border-primary-dark"
        >
          read more
        </button>
      </div>
    </div>
  );
};

export default Card;
