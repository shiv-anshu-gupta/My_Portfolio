import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaJava, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const About_me = () => {
  return (
    <div id="about" className="p-4 lg:p-8 ">
      <h1 className="font-bold italic text-center text-3xl md:text-5xl bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent mb-8 ">
        About Me
      </h1>
    
        <img
          className=" h-40 md:h-60 md:w-60 lg:h-80 border-2 border-slate-600 mb-4 lg:mb-0 lg: float-right "
          src="Images/me2.jpg"
          alt="Profile"
        />
        <div className="text-center lg:text-left p-4 lg:ml-8">
          <p className="text-white text-base md:text-xl">
            I'm Shivanshu, a Full Stack Developer with development experience in
            the MERN stack and a solid foundation in JavaScript, Python, and Java.
            I enjoy creating applications that foster community support, such as
            Elder Support, which connects senior citizens to essential services,
            and a Grocery Shopping platform designed to bring local stores online.
            Skilled in Node.js, Express, and React, along with MySQL and MongoDB,
            I focus on building user-centered, accessible solutions. Driven by a
            passion for problem-solving, I'm always looking to expand my skills
            and take on projects that make a positive impact.
          </p>

          <div className="flex flex-wrap justify-around lg:justify-around mt-8 text-3xl md:text-5xl gap-4">
            <FaHtml5 className=" text-yellow-300 hover:scale-110 transition-transform duration-200" />
            <FaCss3Alt className="text-blue-700 hover:scale-110 transition-transform duration-200" />
            <FaJsSquare className="text-yellow-400 hover:scale-110 transition-transform duration-200" />
            <SiMongodb className="text-green-400 hover:scale-110 transition-transform duration-200" />
            <SiExpress className="text-gray-800 hover:scale-110 transition-transform duration-200" />
            <FaReact className="text-blue-400 hover:scale-110 transition-transform duration-200" />
            <FaNode className="text-green-600 hover:scale-110 transition-transform duration-200" />
            <FaJava className="text-red-700 hover:scale-110 transition-transform duration-200" />
            <RiTailwindCssFill className="text-sky-600 hover:scale-110 transition-transform duration-200" />
            <GrMysql className="text-blue-600 hover:scale-110 transition-transform duration-200" />
            <FaBootstrap className="text-purple-800 hover:scale-110 transition-transform duration-200" />
          </div>
          
          <div className="flex flex- md:flex-row justify-around items-center mt-10 text-white text-lg md:text-2xl lg:text-3xl pb-14">
            <div className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent text-center">
              <h1>10+</h1>
              <p>Technical Skills</p>
            </div>
            <hr className="hidden md:block w-[1px] h-16 bg-gray-400 border-0" />
            <div className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent text-center">
              <h1>3+</h1>
              <p>Projects</p>
            </div>
            <hr className="hidden md:block w-[1px] h-16 bg-gray-400 border-0" />
            <div className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent text-center">
              <h1>8+</h1>
              <p>Tools & Language</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About_me;
