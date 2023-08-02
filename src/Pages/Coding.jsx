import React from "react";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";

function Coding() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticleList(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="text-center"> Loading ...</p>;
  }
  const codingArticles = articleList.filter(
    (article) => article.topic.toLowerCase() === "coding"
  );

  return (
    <section>
      <ul className="container mx-auto my-auto">
        {codingArticles.map((article) => (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            className="space-x-0.5 space-y-0.5 m-1 p-1"
          >
            <li>
              <h3 className="font-semibold">
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
              </h3>
              <h1 className="font-bold tracking-tight">{article.title}</h1>
              <h2>{article.author}</h2>
            </li>
            <p className="border"></p>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Coding;
