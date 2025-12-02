import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../../../../public/assets/assets";

export default function About() {
  return (
    <>
      <div id="About" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 font-ovo text-lg">Introduction</h4>
        <h2 className="text-center font-ovo text-5xl ">About me</h2>

        <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none ">
            <Image
              src={assets.profileImage}
              alt={assets.profileImage}
              className="w-full   rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 font-ovo max-w-2xl ">
              I am a Frontend Developer with one year of experience in the
              field. During this period, I have had the opportunity to work on
              various projects and collaborate with different teams, which has
              helped me develop my skills and deliver effective results.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, iconDark, description, title }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]
 duration-500"
                  key={index}
                >
                  <Image className="w-7 mt-3 " src={icon} alt={title} />
                  <h3 className="font-semibold my-4 text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
            <h4 className="my-6 text-gray-700 font-ovo">Tools i use</h4>
            <ul className="flex gap-3 items-center sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  className="flex justify-center items-center w-12 sm-w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
