import React from "react";

const NavIcon = ({ img, desc }) => {
  return (
    <div className="flex">
      <img src={img} />
      <p>{desc}</p>
    </div>
  );
};

export default NavIcon;
