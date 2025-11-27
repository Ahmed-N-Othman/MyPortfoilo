"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../public/assets/assets";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd7d07fa-8c3c-424c-8887-71d2ae41d320");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="Contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[lenght:90%_auto]"
    >
      <h4 className="text-center mb-2 font-ovo text-lg">Connect with me</h4>
      <h2 className="text-center font-ovo text-5xl ">Get in touch</h2>
      <p className="mb-10 font-ovo max-w-2xl text-center mx-auto mt-5">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <input
            className="flex-1 outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            className="flex-1 outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full p-4 outline-none border-[0.5px]  bg-white border-gray-400 rounded-md mb-6"
          rows={6}
          placeholder="Enter your message"
          required
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Submit Now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="rihtarrow white"
            className="w-4"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
}
