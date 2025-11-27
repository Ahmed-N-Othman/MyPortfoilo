import React from "react";
import { assets, serviceData } from "../../../../public/assets/assets";
import Image from "next/image";

export default function Services() {
  return (
    <div id="Services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 font-ovo text-lg">What i offers</h4>
      <h2 className="text-center font-ovo text-5xl ">My services</h2>
      <p className="text-center mb-12 font-ovo mx-auto mt-5 max-w-2xl">
        I am a Junior Frontend Developer with one year of hands-on experience in
        building modern and responsive web applications. I focus on creating
        clean user interfaces, smooth user experiences, and high-quality layouts
        that look great on all screen sizes. I work with React, Next.js, and
        Tailwind CSS to deliver fast, functional, and visually appealing
        projects tailored to clients’ needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 my-8 md:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {serviceData.map(({ description, icon, title, link }, index) => (
          <div
            className="border rounded-lg border-gray-400 px-8 py-12 hover:shadow-[4px_4px_0px_#000] duration-500 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1"
            key={index}
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm leading-5 text-gray-600">{description}</p>
            <a href={link} className="flex gap-2 items-center mt-5 text-sm">
              {" "}
              Read More{" "}
              <Image
                src={assets.right_arrow}
                alt="rightArrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
