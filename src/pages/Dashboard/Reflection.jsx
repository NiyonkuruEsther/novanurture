import React from "react";
import Post from "../../assets/post.png";
import Button from "../../components/Button";

const Reflection = () => {
  return (
    <div className="flex items-center h-screen divide-x-2 divide-black">
      <div className="flex-1 flex flex-col w-full h-screen border-r-2 divide-y-2">
        <p className="text-center py-10 text-lg">Create a post</p>
        <div className="flex-1 relative">
          <textarea
            className="w-full h-full focus:outline-none p-5 text-lg"
            name=""
            id=""
            placeholder="Share your thought"
          />

          <Button
            title="Share"
            styles="absolute right-5 bottom-5 bg-lightGreen"
          />
        </div>
      </div>
      <img src={Post} alt="" className="h-[90vh] px-4" />
    </div>
  );
};

export default Reflection;
