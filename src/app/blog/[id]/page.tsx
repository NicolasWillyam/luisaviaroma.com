import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchBlogs(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN_API}`,
    },
  };

  try {
    const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
    const response = await res.json();
    console.log("============" + response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

const Page = async ({ params }: any) => {
  const blog = await fetchBlogs(params.id);

  const imageUrl =
    "http://localhost:1337" + blog.data.attributes.Image.data[0].attributes.url;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href={"/"}>{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image layout="fill" objectFit="cover" src={imageUrl} alt={""} />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.data.attributes.Title}</h1>
        <p className="text-gray-600 mt-2">{blog.data.attributes.Description}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            {" "}
            Pubilshed on {""}
            {new Date(blog.data.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
