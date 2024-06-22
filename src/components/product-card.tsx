import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductCard = () => {
  return (
    <div>
      <div className="w-full h-[320px] bg-gray-200 p-2.5">
        <FiHeart className="ml-auto" size={20} />
      </div>
      <div className="mt-3">
        <p className="text-light-black text-base font-bold uppercase">
          BOTTEGA VENETA
        </p>
        <p className="text-light-black font-normal text-[15px] my-2 mb-4">
          Mini Hop leather cross-body bag
        </p>
        <p className="text-light-black text-base uppercase font-bold">$200</p>
      </div>
    </div>
  );
};

export default ProductCard;
