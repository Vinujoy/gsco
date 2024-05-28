import React from "react";

const Intro = () => {
  return (
    <div className="bg-gray-100 px-10 pt-32 pb-20">
      <div className="container mx-auto flex items-center justify-around">
        <div className="max-w-md">
          <h1 className="text-[45px] font-bold text-gray-800 mb-5 leading-[60px]">
            <span className="text-blue-[#1A202C] font-light">Great</span>
            <span className="gradient-text"> product</span>
            <span className="text-blue-[#1A202C] font-light"> is</span>
            <br />
            <span className="font-bold">built by great </span>
            <span className="gradient-text">teams</span>
          </h1>
          <p className="text-sm text-gray-600 mb-10">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <button className="bg-[#3D63EA] text-white py-2 px-4 rounded hover:bg-blue-600 border-none">
            Let's get started
          </button>
        </div>
        <div>
          <img src="/banner.png" alt="Banner" className="w-full h-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
