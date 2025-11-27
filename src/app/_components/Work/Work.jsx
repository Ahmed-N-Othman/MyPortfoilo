import React from "react";
import { assets, workData } from "../../../../public/assets/assets";
import Image from "next/image";

export default function Work() {
  return (
    <div id="MyWork" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 font-ovo text-lg">My portfolio</h4>
      <h2 className="text-center font-ovo text-5xl ">My latest work</h2>
      <p className="mb-12 font-ovo max-w-2xl text-center mx-auto mt-5">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 my-8 md:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {workData.map((project, index) => (
          <a  key={index} target="_blank" href={project.link}>
          <div
            className="bg-cover aspect-square bg-no-repeat bg-center relative rounded-lg cursor-pointer group"
           
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white absolute bottom-5 w-10/12 rounded-md left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full aspect-square shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition flex items-center justify-center w-9 border-black">
                <Image src={assets.send_icon} alt="sendIcon" className="w-5" />
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
      <a
        className="flex items-center gap-2 text-gray-700 border-[0.5px] rounded-full border-gray-700 px-10 my-20 py-3 mx-auto hover:bg-[#fcf4ff] duration-500 justify-center w-max"
        href=""
      >
        Show More{" "}
        <Image
          src={assets.right_arrow_bold}
          alt={assets.right_arrow_bold}
          className="w-4"
        />
      </a>
    </div>
  );
}
/////
