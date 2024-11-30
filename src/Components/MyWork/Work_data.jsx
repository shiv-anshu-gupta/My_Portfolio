import React from "react";

const Work_data = ({ Title, ImgProject, link }) => {
  return (
    <div className=" w-80  rounded-lg flex flex-col items-center p-2 mb-4 transform hover:scale-125 transition hover: duration-1000 ">
      <h1 className="text-center text-2xl transform hover:scale-125 italic">{Title}</h1>
      
      <a className="text-blue-300 text-xs underline " href={link}>
      <img className="w-80 m-2 rounded-lg mb-0" src={ImgProject} alt="Projects" />
      </a>
    </div>
  );
};

export default Work_data;
