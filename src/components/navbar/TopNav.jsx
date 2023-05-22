import React from "react";
import NavIcon from "./NavIcon";

const TopNav = () => {
  return (
    <div>
      <div className=" w-10/12 flex py-8 justify-between mx-auto items-center">
        <img src="./search.svg" />
        <img className="ml-40" src="./logo.svg" />
        <div className="flex gap-x-4">
          <NavIcon img={"./account.svg"} desc={"Account"} />
          <NavIcon img={"./shoping.svg"} desc={"Shopping"} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
