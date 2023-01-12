import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState([true]);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <main>
      <div className="Single-Article">
        <h4>{article.title}</h4>
        <h5> {article.body}</h5>
        <h4 className="Article-Author">{article.author}</h4>
        <h6 className="Article-Date">{article.created_at}</h6>
      </div>
    </main>
  );
};

export default SingleArticle;
