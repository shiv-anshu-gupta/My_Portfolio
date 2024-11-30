import React from "react";
import Work_data from "./Work_data";
const Mywork = () => {
  return (
    <div id="projects" className="text-white p-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text text-transparent p-2">
          My Latest Work
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className=" w-9/12  flex justify-between m-10 flex-wrap">
          <Work_data
            Title="Elder Support"
            ImgProject="Images/village.png"
            link="https://oldcummunitysupport.onrender.com/"
          />
          <Work_data
            Title="Grocery Store website"
            ImgProject="Images/php.jpg"
            link="https://github.com/shiv-anshu-gupta/GroceryStore"
          />
        </div>
      </div>
    </div>
  );
};

export default Mywork;
