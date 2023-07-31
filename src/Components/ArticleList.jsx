import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [ArticleList, setArticleList] = useState([]);
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

  return (
    <section>
      <ul className="container mx-auto my-auto">
        {ArticleList.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <li>
                <h1 className="text-lg font-bold tracking-tight">
                  {article.title}
                </h1>
                <h2>{article.author}</h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
