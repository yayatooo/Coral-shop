import React from "react";

const Banner = () => {
  return (
    <div className="py-12">
      <div className="w-full h-full bg-banner-pattern flex items-center h-[80vh]">
        <div className="w-3/12 ml-[65rem] flex flex-col items-start justify-end ">
          <img src="./zara.svg" />
          <p className="text-xl w-full text-justify font-normal text-white py-12 font-roboto">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="p-4 bg-white font-normal font-roboto text-2xl">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
