import Image from "next/image";
import React from "react";
import { assets } from "../../../../public/assets/assets";

export default function Header() {
  return (
    <div className="mx-auto w-11/12 text-center max-w-3xl h-screen mb-7 flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.roundProfileImage}
          className="rounded-full w-32"
          alt={assets.profile_img}
        />
      </div>
      <h3 className="flex items-end text-xl md:text-2xl mb-3 gap-2 font-ovo">
        Hi! I’m Ahmed Othman{" "}
        <Image src={assets.hand_icon} className=" w-6" alt={assets.hand_icon} />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        frontend web developer based in Alexandria.
      </h1>
      <p className="mx-auto font-ovo max-w-2xl ">
        I am a frontend developer from Egypt, with one year of experience .
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#Contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            className=" w-4"
            alt={assets.right_arrow_white}
          />{" "}
        </a>
        <a
          href="/Ahmed-Othman-CV.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            className=" w-4"
            alt={assets.download_icon}
          />{" "}
        </a>
      </div>
    </div>
  );
}
