import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import './contact.css';
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-40 flex items-center justify-center relative">
      <div className="flex flex-row items-center justify-between w-[65vw] gap-20   flex-wrap">
        <div className="flex flex-col justify-start items-start flex-wrap">
          <h1 className="text-4xl font-medium mb-5">Just say hi,</h1>
          <p className="text-xl w-80 mb-2">
            I'm always open to discuss new projects and your ideas
          </p>
          <div className="w-full flex gap-11 justify-between items-center">
            <div className="flex flex-col gap-2 items-start justify-center flex-wrap">
              <h2 className="text-lg font-light">Email</h2>
              <p className="text-md">raghavjayateerth@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <h2 className="text-lg font-light">Media handles</h2>
              <div className="flex flex-row items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/rj2001" target="_blank" rel="noopener noreferrer"><FaLinkedin className="size-6 cursor-pointer" /></a>
                <a href="https://github.com/Raghavj2000" target="_blank" rel="noopener noreferrer"><FaGithub className="size-6 cursor-pointer" /></a>
                <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><FaInstagram className="size-6 cursor-pointer" /></a>
                <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"><FaFacebook className="size-6 cursor-pointer" /></a>
                <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer"><FaTwitter className="size-6 cursor-pointer" /></a>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-[#212121] py-10 px-10 flex flex-col justify-center items-start text-white">
          <input type="text" placeholder="Name" className="w-96 border-b-2 border-white bg-transparent mb-5  focus:outline-none" required />
          <input type="email" placeholder="Email" className="w-96 border-b-2 bg-transparent border-white  mb-5 focus:outline-none" required />
          <input type="text" placeholder="(Optional) Budget" className="w-96 border-b-2 border-white bg-transparent mb-5 focus:outline-none" />
          <textarea placeholder="Description" className="w-96 border-b-2 border-white bg-transparent  mb-5 focus:outline-none resize-none"></textarea>
          <button type="submit" className="bg-[#f8f8f8] text-[#212121] py-2 px-5 ">Submit</button>
        </form>
      </div>
      <div className="absolute bottom-5 right-5">
        <Link href="/"><FaArrowUp className="size-6 cursor-pointer" /></Link>
      </div>
    </section>
  );
};

export default Contact;
