import React from "react";

import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Connect = () => {
  return (
    <div className="flex flex-col fixed top-20 right-0 bg-white  w-12 h-48 float-right mr-4 rounded-lg">
      <div className="flex flex-col justify-around items-around space-y-4 items-center">
        <a href="mailto:shivanshu25gupta@gmail.com">
          <SiGmail className="text-4xl text-[#D93025]" />
        </a>
        <a href="https://www.linkedin.com/in/shivanshu-gupta-6a0231211/">
          <FaLinkedin className="text-4xl text-blue-600" />
        </a>
        <a href="https://github.com/shiv-anshu-gupta">
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/shiv_anshu_gupta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="text-4xl text-pink-500" />
        </a>
      </div>
    </div>
  );
};

export default Connect;
