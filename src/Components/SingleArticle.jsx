import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import VoteModifier from "./VoteModifier";

const SingleArticle = () => {
  const [comments, setComments] = useState({});
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

  const date = article.created_at.split("T")[0];
  return (
    <main>
      <div className="Single-Article">
        <h4>{article.title}</h4>
        <h5> {article.body}</h5>
        <h4 className="Article-Author">{article.author}</h4>
        <h6 className="Article-Date">{date}</h6>
        <VoteModifier article_id={article.article_id} votes={article.votes} />
      </div>
      <Comments comments={comments} setComments={setComments} />
    </main>
  );
};

export default SingleArticle;
