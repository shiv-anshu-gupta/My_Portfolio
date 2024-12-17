import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-white w-9/12 ">
        <h1 className="text-2xl mb-2 text-cyan-600 italic">Shivanshu</h1>
        <p className="w-64 text-sm text-gray-300">
          As a passionate developer, I believe in the transformative power of
          technology to solve real-world problems. Whether it's building
          platforms for community support or simplifying everyday tasks with
          user-friendly applications, my goal is to create meaningful solutions
          that positively impact lives.
        </p>
        <hr className="mt-4 mb-4" />
        <p>@2024 Shivanshu Gupta. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
