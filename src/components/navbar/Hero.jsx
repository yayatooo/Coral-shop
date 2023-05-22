import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex w-10/12 mx-auto items-center justify-between py-12">
        <div className="flex flex-col w-5/12 items-start">
          <h1 className="text-7xl font-normal">Collection</h1>
          <h3 className="text-3xl font-normal py-12 leading-relaxed">
            you can explore ans shop many differnt collection from various
            barands here.
          </h3>
          <button className="flex bg-dark-btn py-4 px-6 text-white font-semibold items-center gap-x-2">
            <img src="./whiteshop.svg" className="w-3/12" />
            Shop Now
          </button>
        </div>
        <div className="w-5/12">
          <img src="./image-product.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
