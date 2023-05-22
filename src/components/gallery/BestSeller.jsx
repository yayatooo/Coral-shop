import React, { useEffect, useState } from "react";
import Tittle from "../Tittle";
import CardProduct from "./CardProduct";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  const bestSellerData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await response.json();
    setBestSeller(data);
  };

  useEffect(() => {
    bestSellerData();
  }, []);

  return (
    <>
      <Tittle>Our Best Seller</Tittle>
      <div className="py-12 w-10/12 mx-auto flex flex-wrap justify-between gap-y-12">
        {bestSeller.map((data) => {
          return (
            <CardProduct
              key={data.id}
              image={data.image}
              title={data.title}
              category={data.category}
              price={data.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default BestSeller;
