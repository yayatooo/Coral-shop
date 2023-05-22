import React from "react";

const Button = ({ title, img }) => {
  return (
    <button className="font-normal flex items-center text-white bg-dark-btn px-4 py-2">
      <img src={img} />
      {title}
    </button>
  );
};

export default Button;
