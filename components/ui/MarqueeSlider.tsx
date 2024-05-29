import React from "react";
import Image from "next/image";
import { companyLogos } from "@/lib/data";

const MarqueeSlider = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {companyLogos.map((image, index) => (
          <Image
            key={index}
            src={image.imageUrl}
            className="px-4"
            alt={`Company logo ${index + 1}`}
            width={10}
            height={10}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
