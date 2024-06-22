import React from "react";
import ArticleCard from "./article-card";

const ArticleLayout = () => {
  return (
    <div>
      <hr />
      <div className="w-full pt-8 px-2.5 grid grid-cols-4 gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArticleLayout;
