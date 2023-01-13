import Link from "next/link";
import React from "react";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const navigation = () => {
  return (
    <div className="fixed top-0 z-10 flex h-16 w-full flex-row items-center justify-between bg-white px-6 shadow-sm lg:px-36">
      <h1 className="bg-gradient-to-r from-[#F69C15] to-[#F20BBF] bg-clip-text text-lg font-bold tracking-[-0.03em] text-transparent xl:text-2xl">
        Portfolio
      </h1>
      <div className="sm:hidden">
        <MdMenu size="24" />
      </div>
      <ul className="hidden flex-row items-center justify-center gap-6 sm:flex">
        <li className="cursor-pointer">
          <Link href="https://github.com/bratdr">
            <FaGithub size="24" />
          </Link>
        </li>
        <li>
          <Link href="https://t.me/bratdr">
            <FaTelegram size="24" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/bratadarmawan/">
            <FaLinkedin size="24" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
