import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

const AllProducts = ({ setFiltered }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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
      {loading ? (
        <p className="font-bold text-2xl">Loading...</p>
      ) : (
        <div className="py-12 w-10/12 mx-auto flex flex-wrap justify-between gap-y-12">
          {products.map((product) => {
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
      )}
    </>
  );
};

export default AllProducts;
