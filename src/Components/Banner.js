// Banner.js
import React from 'react';

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
