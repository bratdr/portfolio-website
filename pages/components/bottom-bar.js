import Link from "next/link";
import React from "react";

const navigation = () => {
  return (
    <div className="fixed bottom-0 z-10 mb-5 flex h-16 w-[490px] flex-row items-center justify-center rounded-full bg-white px-6 shadow-sm lg:px-36">
      <ul className="flex flex-row items-center justify-center gap-[4rem] text-sm">
        <li className="cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Works</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
