import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import HeaderGallery from "./HeaderGallery";
import CardProduct from "./CardProduct";

const ContainerGallery = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectCategory, setSelectCategory] = useState("electronics");
  // const [loading, setLoading] = useState(false);
  const api = "https://fakestoreapi.com/products";

  const getAllProducts = async () => {
    const response = await fetch(api);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    setFiltered(dataProduct);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <HeaderGallery />

      <div>
        <div className="w-10/12 flex justify-between mx-auto items-center">
          <Categories
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            products={products}
            setFiltered={setFiltered}
          />
          <button className="font-normal flex items-center text-white bg-dark-btn p-2">
            <img src="./filter.svg" />
            Filter
          </button>
        </div>
        <div className="py-12 w-10/12 mx-auto flex flex-wrap justify-between gap-y-12">
          {filtered.map((product) => {
            return (
              <CardProduct
                key={product.id}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContainerGallery;
