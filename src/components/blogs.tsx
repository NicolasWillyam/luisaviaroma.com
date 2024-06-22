"use client";
import React, { useContext } from "react";
import BlogCard from "./blog-card";
import { CategoryContext } from "@/context/category-context";

const Blogs = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.data.filter((blog: any) => {
    return blog.attributes.categories.data.some(
      (cat: any) => cat.attributes.Title === category
    );
  });
  console.log(filteredBlogs);
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {filteredBlogs?.map((blog: any) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
