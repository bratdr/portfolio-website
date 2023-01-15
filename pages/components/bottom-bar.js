import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const BottomBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* BottomBar for Mobile Viewport */}
      <div
        onClick={handleNav}
        className="fixed bottom-0 z-10 mb-5 flex h-[40px] w-[40px] flex-row items-center justify-center rounded-full bg-white text-[#141414] shadow-lg ring-1 ring-[#bcbcbc] duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:text-white hover:shadow-none hover:ring-0 active:h-[55px] active:w-[55px] active:cursor-pointer md:hidden"
      >
        {!nav ? <MdMenu size={20} /> : <MdClose size={20} />}
      </div>

      {/* BottomBar Menu */}
      <div
        className={
          !nav
            ? "fixed bottom-[-100%] "
            : "fixed bottom-0 h-full w-[100%] items-center justify-center bg-[#0c0c0c] duration-700 ease-in-out"
        }
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-6 mb-6 bg-gradient-to-r from-[#F69C15] to-[#F20BBF] bg-clip-text text-2xl font-bold tracking-[-0.03em] text-transparent">
            Portfolio
          </h1>
          <ul className="flex flex-col items-center justify-center gap-2 text-base text-white">
            <li className="flex h-[40] w-screen cursor-pointer items-center justify-center border-b border-[#3c3c3c] px-5 py-3">
              <Link
                href="/"
                className="duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:bg-clip-text  hover:font-medium hover:text-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex h-[40] w-screen cursor-pointer items-center justify-center border-b border-[#3c3c3c] px-5 py-3">
              <Link
                href="/works"
                className="duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:bg-clip-text  hover:font-medium hover:text-transparent"
              >
                Works
              </Link>
            </li>
            <li className="flex h-[40] w-screen cursor-pointer items-center justify-center border-b border-[#3c3c3c] px-5 py-3">
              <Link
                href="/about"
                className="duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:bg-clip-text  hover:font-medium hover:text-transparent"
              >
                About
              </Link>
            </li>
            <li className="flex h-[40] w-screen cursor-pointer items-center justify-center border-b border-[#3c3c3c] px-5 py-3">
              <Link
                href="/contact"
                className="duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:bg-clip-text  hover:font-medium hover:text-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="fixed bottom-0 z-10 mb-5 hidden h-[60px] w-[440px] flex-row items-center justify-center rounded-full bg-white px-6 text-[#848484] shadow-lg outline outline-1 outline-[#bcbcbc] md:flex md:px-36"> */}
      <div className="fixed bottom-0 z-10 mb-5 hidden h-[60px] w-[440px] flex-row items-center justify-center rounded-full bg-[#0c0c0c] px-6 text-[#848484] shadow-lg outline outline-1 outline-[#bcbcbc] md:flex md:px-36">
        <ul className="flex flex-row items-center justify-center gap-6 text-base">
          <li className="h-[40] w-[90] cursor-pointer rounded-full px-5 py-3 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:px-5 hover:py-3 hover:font-medium hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="h-[40] w-[90] cursor-pointer rounded-full px-5 py-3 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:px-5 hover:py-3 hover:font-medium hover:text-white">
            <Link href="/works">Works</Link>
          </li>
          <li className="h-[40] w-[90] cursor-pointer rounded-full px-5 py-3 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:px-5 hover:py-3 hover:font-medium hover:text-white">
            <Link href="/about">About</Link>
          </li>
          <li className="h-[40] w-[90] cursor-pointer rounded-full px-5 py-3 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#F69C15] hover:to-[#F20BBF] hover:px-5 hover:py-3 hover:font-medium hover:text-white">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomBar;
