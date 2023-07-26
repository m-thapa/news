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
    <>
      <h1 className="space-x-0.5 text-lg font-bold m-1 p-1 ">
        {article.title}
      </h1>
      <h2 className="m-1 p-1"> {article.body}</h2>
      <h3 className=" m-1 p-1 font-semibold italic ">
        by {article.author} {date}
        <VoteModifier article_id={article.article_id} votes={article.votes} />
      </h3>
      <div >
        <Comments comments={comments} setComments={setComments} />
      </div>
    </>
  );
};

export default SingleArticle;
