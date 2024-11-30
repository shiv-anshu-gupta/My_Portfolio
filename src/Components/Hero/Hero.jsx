import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center md:m-8 mt-12 mb-32 p-4 md:p-8 "
    >
      <div className="text-white w-full  md:w-2/3 lg:w-1/2 flex flex-col items-center text-center ">
        {/* Responsive Image */}
        <img
          className="rounded-full h-48 md:h-48 lg:h-64"
          src="Images/me.jpg"
          alt=""
        />

        {/* Responsive Heading */}
        <h1 className="mt-4 text-3xl md:text-3xl lg:text-4xl ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d299c2] to-[#fef9d7]">
            I'm Shivanshu Gupta,
          </span>
          <span className="block">FullStack Developer</span>
        </h1>

        {/* Responsive Paragraph */}
        <p className=" md:text-xl lg:text-xl text-gray-200 w-5/6 md:w-3/4 mt-4">
          I am a Full Stack Developer from Satna, Madhya Pradesh, India with
          experience in web development. I have worked on several projects
          solving real-world problems.
        </p>

        {/* Responsive Buttons */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4">
          <AnchorLink href="#contact" offset={50}>
            <button className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] w-32 md:w-24 h-10 md:h-8 rounded-lg text-center text-blue-500 font-medium">
              Hire Me
            </button>
          </AnchorLink>
          <a href="/resume.pdf" // Update this path to the location of your resume file
            target="_blank"
            rel="noopener noreferrer">
          <button className="text-blue-200 underline">My Resume</button></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
