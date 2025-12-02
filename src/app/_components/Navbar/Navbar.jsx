"use client";
import Image from "next/image";
import { assets } from "../../../../public/assets/assets";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scroll, setscroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translatex(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translatex(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-20 translate-y-[-80%] w-11/12">
        <Image src={assets.header_bg_color} alt={assets.header_bg_color} />
      </div>
      <nav
        className={`w-full fixed px-5 py-4 flex items-center justify-between lg:px-8 xl:px-[8%] z-50 ${
          scroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a>
          <Image
            src={assets.logoBlack}
            className="w-28 cursor-pointer mr-14"
            alt={assets.logoBlack}
          />
        </a>
        <ul
          className={`hidden md:flex items-center lg:gap-8 gap-6 rounded-full px-12 py-3 ${
            scroll ? "" : " bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#About">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#MyWork">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
       

          <a
            className="hidden lg:flex items-center gap-3 px-10 border font-ovo  border-gray-500 py-2.5 rounded-full ml-4"
            href="#Contact"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt={assets.arrow_icon}
            />
          </a>
          <button
            onClick={openMenu}
            className="cursor-pointer block md:hidden ml-4"
          >
            <Image
              src={assets.menu_black}
              alt={assets.menu_black}
              className="w-6"
            />
          </button>
        </div>
        {/* mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute top-6 right-6">
            <Image
              src={assets.close_black}
              alt={assets.close_black}
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#About">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#MyWork">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#Contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
