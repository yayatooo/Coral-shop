import React, { useEffect } from "react";

const Categories = ({
  selectCategory,
  setSelectCategory,
  setFiltered,
  products,
}) => {
  useEffect(() => {
    // if (setFiltered === "All Products") {
    //   setFiltered(products);
    //   return;
    // }
    const filtered = products.filter((cate) =>
      cate.category.includes(selectCategory)
    );
    setFiltered(filtered);
  }, [selectCategory]);

  return (
    <div>
      <div className="flex font-semibold text-dark-btn gap-x-12">
        <button onClick={() => setSelectCategory("electronics")}>
          electronics
        </button>
        <button onClick={() => setSelectCategory("jewelery")}>jewelery</button>
        <button onClick={() => setSelectCategory("men's clothing")}>
          men's clothing
        </button>
        <button onClick={() => setSelectCategory("women's clothing")}>
          women's clothing
        </button>
      </div>
    </div>
  );
};

export default Categories;
