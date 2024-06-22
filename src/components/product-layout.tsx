import React from "react";
import ProductCard from "./product-card";

const ProductLayout = () => {
  return (
    <div>
      <hr />
      <p className="mt-3 mb-6 font-bold text-center text-xl">May Picks</p>
      <div className="max-w-7xl mx-auto px-10 pt-8 grid grid-cols-5 gap-2.5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductLayout;
