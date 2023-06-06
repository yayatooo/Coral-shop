import React from "react";
import NavLink from "./NavLink";
import TopNav from "./TopNav";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-base-color py-10">
        <TopNav />
        <hr className="w-10/12 mx-auto border-black " />
        <NavLink />
        <Hero />
      </div>
    </>
  );
};

export default Navbar;
