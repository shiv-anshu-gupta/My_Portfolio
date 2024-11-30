import React from "react";

const Contact_details = ({Icon, Info}) => {
  return (
    <div className="mt-4 flex items-center bg-gray-800 p-2 rounded-lg shadow-md mb-2">
      <div className="text-white text-2xl mr-3">{Icon}</div>
      <p className="text-white text-lg">{Info}</p>
    </div>
  );
};

export default Contact_details;
