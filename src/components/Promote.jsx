import React from "react";
import Tittle from "./Tittle";
import Button from "./Button";

const Promote = () => {
  return (
    <div className="w-full bg-gray-200 py-12">
      <Tittle>Follow products and discounts on Instagram</Tittle>
      <div className="w-8/12 py-14 mx-auto">
        <img src="./instagram.svg" />
      </div>
      <div className="pb-12">
        <Tittle>Or Subscribe To The Newsletter</Tittle>
      </div>
      <div className="w-1/12 mx-auto">
        <button className="flex bg-dark-btn py-4 px-6 text-white font-semibold items-center gap-x-2">
          <img src="./ig.svg" className="w-3/12" />
          Follow
        </button>
      </div>
    </div>
  );
};

export default Promote;
