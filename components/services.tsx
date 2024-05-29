import React from "react";
import { servicesData } from "@/lib/data";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-14 bg-[#F9F9FF]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-0">
          Services We Offer
        </h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 py-16">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="min-w-[300px] bg-white p-4 rounded-lg border border-transparent transition duration-300 transform group  hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:text-blue-500"
              >
                <div className="flex mb-4">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-12 h-12 rounded-full object-cover border p-1 group-hover:border-blue-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
