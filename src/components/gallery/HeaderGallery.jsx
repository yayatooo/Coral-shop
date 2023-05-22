import React from "react";
import Brands from "./Brands";
import Tittle from "../Tittle";

const HeaderGallery = () => {
  return (
    <div>
      <div className=" w-10/12 mx-auto flex items-center justify-between py-12">
        <Brands children={"./01.svg"} />
        <Brands children={"./02.svg"} />
        <Brands children={"./03.svg"} />
        <Brands children={"./04.svg"} />
        <Brands children={"./05.svg"} />
      </div>
      <div className="py-12">
        <Tittle>Or subscribe to the newsletter</Tittle>
      </div>
    </div>
  );
};

export default HeaderGallery;
