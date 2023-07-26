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
    return <p>Loading ...</p>;
  }

  return (
    <main className="Articles">
      <ul className="Article-list">
        {ArticleList.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li key={article.article_id}>
                <h1>{article.title}</h1>
                <h2>{article.author}</h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default ArticleList;
