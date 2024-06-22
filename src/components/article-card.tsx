import React from "react";

const ArticleCard = () => {
  return (
    <div>
      <div className="w-full h-[450px] bg-gray-200"></div>
      <div className="grid mt-4 mb-8">
        <p className="text-lighter-black text-[11px] uppercase">Fashion</p>
        <p className="text-light-black font-bold text-xl leading-[26px] my-4">
          Fashion Tote Bags: Latest Trends and Sustainable Shopping
        </p>
        <p className="text-lighter-black text-[11px] uppercase">31 May 2024</p>
      </div>
    </div>
  );
};

export default ArticleCard;
