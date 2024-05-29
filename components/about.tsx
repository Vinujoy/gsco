import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white px-6 md:px-10 pt-20 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        {/* Left Side Content */}
        <div className="max-w-md md:pr-8 text-center md:text-left">
          {/* Blue line */}
          <div className="border-t-4 border-blue-500 w-16 mx-auto md:mx-0 mb-8"></div>

          {/* Heading */}
          <h2 className="text-3xl mb-4">
            <span>Leading Companies Trust us </span>
            <br />
            <span className="font-bold">to Develop Software</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 mb-8">
            We add development capacity to tech teams. Our value isn’t limited
            to building teams but is equally distributed across the project
            lifecycle. We are a custom software development company that
            guarantees the successful delivery of your project.
          </p>

          {/* See More Information Link */}
          <Link
            href="/more-information"
            className="text-blue-500 hover:underline flex items-center justify-center md:justify-start"
          >
            See More Information <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 w-full max-w-lg">
          <Image
            src="/aboutus.png"
            alt="About Us Image"
            height={500}
            width={500}
            className="rounded mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
