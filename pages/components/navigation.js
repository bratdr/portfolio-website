import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaRegPaperPlane,
} from "react-icons/fa";

const Navigation = () => {
  return (
    // <div className="fixed top-0 z-10 flex h-16 w-full flex-row items-center justify-between bg-white px-6 shadow-sm lg:px-36">
    <div className="fixed top-0 flex h-16 w-screen flex-row items-center justify-between bg-[#0c0c0c] px-6 shadow-sm md:z-10 lg:px-36">
      <h1 className="bg-gradient-to-r from-[#F69C15] to-[#F20BBF] bg-clip-text text-lg font-bold tracking-[-0.03em] text-transparent xl:text-2xl">
        Portfolio
      </h1>

      {/* Mailto */}
      <div className="text-white active:text-[#F69C15] sm:hidden">
        <Link href="mailto:work.brata@gmail.com?subject=Hello">
          <FaRegPaperPlane size="16" />
        </Link>
      </div>

      {/* Social Platform Logo */}
      {/* <ul className="hidden flex-row items-center justify-center gap-6 sm:flex"> */}
      <ul className="hidden flex-row items-center justify-center gap-6 text-white sm:flex">
        <li className="cursor-pointer hover:text-purple-800">
          <Link href="https://github.com/bratdr">
            <FaGithub size="24" />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-sky-500">
          <Link href="https://t.me/bratdr">
            <FaTelegram size="24" />
          </Link>
        </li>
        <li className="cursor-pointer hover:text-blue-700">
          <Link href="https://www.linkedin.com/in/bratadarmawan/">
            <FaLinkedin size="24" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
