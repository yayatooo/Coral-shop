import React from "react";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import TopNav from "./TopNav";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-base-color">
        <TopNav />
        <hr className="w-10/12 mx-auto border-black " />
        <NavLink />
        <Hero />
      </div>
    </>
  );
};

export default Navbar;
