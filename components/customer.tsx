import React from "react";
import MarqueeSlider from "./ui/MarqueeSlider";

const Customer = () => {
  return (
    <section id="customer" className="bg-[#F9F9FF]  pt-20 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        {/* Left Side Content */}
        <div className="max-w-md md:pr-8 text-center md:text-left">
          {/* Blue line */}
          <div className="border-t-4 border-blue-500 w-16 mx-auto md:mx-0 mb-8"></div>

          {/* Heading */}
          <h2 className="text-3xl mb-4">
            <span>Meet the People </span>
            <br />
            <span className="font-bold">We are Working With</span>
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 w-full max-w-lg"></div>
      </div>
      {/* Marquee Slider */}
      <div className="w-full">
        <MarqueeSlider />
      </div>
    </section>
  );
};

export default Customer;
