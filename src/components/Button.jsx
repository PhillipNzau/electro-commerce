import React from "react";

const Button = ({ text, width }) => {
  return (
    <div
      style={{ width: `${width}px` }}
      className="text-center text-white py-4 bg-orange-400 rounded-md flex items-center justify-center transition duration-300
       hover:bg-orange-500 hover:cursor-pointer"
    >
      {text}
    </div>
  );
};

export default Button;
