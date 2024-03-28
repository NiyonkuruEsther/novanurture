import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20 h-screen">
      <div className="flex justify-between">
        <div className="w-3/6">
          <p className="text-base font-semibold pb-5">Gallery</p>
          <h1 className="text-5xl font-semibold m-0">
            Start with refreshing images today
          </h1>
        </div>
        <p className="w-2/6 text-base self-center">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam.
        </p>
      </div>

      {/* images */}

      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default Gallery;
