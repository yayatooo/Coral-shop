import React from "react";

const CardProduct = (props) => {
  return (
    <div className="w-96 bg-white p-4">
      <div className="overflow-hidden">
        <img
          className=" w-full object-contain aspect-square"
          src={props.image}
        />
      </div>
      <div className="">
        <h1 className=" max-w-xs overflow-auto font-bold p-4">{props.title}</h1>
        <div className="flex justify-between px-4">
          <p className="text-gray-400 font-light">{props.category}</p>
          <p className="font-bold">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
