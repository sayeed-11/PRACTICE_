import React from "react";

const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="px-5 py-2 bg-pink-600 text-white rounded-xl"
    >
      {children}
    </button>
  );
};

export default Button;
