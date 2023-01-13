import React from "react";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

const navigation = () => {
  return (
    <div className="flex h-16 flex-row items-center justify-between px-6">
      <h1 className="text-lg font-bold">Portfolio</h1>
      <ul className="flex flex-row items-center justify-center gap-6">
        <li>
          <FaGithub size="18" />
        </li>
        <li>
          <FaTelegram size="18" />
        </li>
        <li>
          <FaLinkedin size="18" />
        </li>
      </ul>
    </div>
  );
};

export default navigation;
