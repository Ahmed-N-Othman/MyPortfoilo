import Image from "next/image";
import React from "react";
import { assets } from "../../../../public/assets/assets";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt="logo"
          className="
        w-36 mx-auto mb-2"
        />
      </div>
      <div className="flex items-center gap-2 mx-auto w-max"> <Image
          src={assets.mail_icon}
          alt="mailIcon"
          className="
        w-6"
        /> ahmedothman3388@gmail.com </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>© 2025 Ahmed Othman. All rights reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/Ahmed-N-Othman">Github</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/ahmed-othman-563908235/">LinkedIn</a></li>
                <li><a target="_blank" href="https://www.instagram.com/ahmed_othman007">Instagram</a></li>
            </ul>
        </div>
    </div>
  );
}
