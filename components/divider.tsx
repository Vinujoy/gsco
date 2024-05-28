import Image from "next/image";
import React from "react";
import circleImage from '/public/circle.png';

const Circle = () => {
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-32 top-0">
        <Image
          src={circleImage}
          alt="Circle"
          className="w-full h-full object-cover"
          style={{ clipPath: "circle(50% at 50% 0%)" }}
        />
      </div>
    </div>
  );
};

export default Circle;
