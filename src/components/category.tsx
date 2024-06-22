"use client";
import { CategoryContext } from "@/context/category-context";
import React, { useContext } from "react";

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.attributes.Title)}
      className={`${
        cat.attributes.Title === category
          ? "bg-yellow-500 text-black "
          : "bg-white text-black"
      } p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {cat.attributes.Title}
    </div>
  );
};

export default Category;
