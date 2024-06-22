import ArticleLayout from "@/components/article-layout";
import BlogCard from "@/components/blog-card";
import Blogs from "@/components/blogs";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HomeBackground from "@/components/home-section/home-background";
import NavBar from "@/components/nav-bar";
import ProductLayout from "@/components/product-layout";
import Image from "next/image";

// async function fetchCategories() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_TOKEN_API}`,
//     },
//   };

//   try {
//     const res = await fetch("http://localhost:1337/api/categories");
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function fetchBlogs() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_TOKEN_API}`,
//     },
//   };

//   try {
//     const res = await fetch("http://localhost:1337/api/blogs?populate=*");
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

export default async function Home() {
  // const categories = await fetchCategories();
  // const blogs = await fetchBlogs();

  return (
    <div className="w-full">
      <NavBar />
      {/* <div className="w-full grid grid-cols-1 gap-20">
        <HomeBackground />
        <ArticleLayout />
        <ProductLayout />
        <ArticleLayout />
        <ArticleLayout />
        <ArticleLayout />
        <ArticleLayout />
        <ArticleLayout />
        <Footer />
      </div> */}
      {/* <Categories categories={categories} />
      <Blogs blogs={blogs} /> */}
    </div>
  );
}
