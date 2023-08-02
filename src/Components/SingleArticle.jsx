import React, { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import VoteModifier from "./VoteModifier";
import CommentAdder from "./CommentAdder";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p className="text-center">Loading ...</p>;
  const date = article.created_at.split("T")[0];

  return (
    <section>
      <h4 className="font-semibold space-x-0.5 space-y-0.5 m-1 p-1">
        {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
      </h4>
      <h1 className="space-x-0.5 space-y-0.5 text-lg font-bold m-1 p-1 tracking-tight">
        {article.title}
      </h1>
      <h2 className="m-1 p-1"> {article.body}</h2>
      <h3 className="m-1 p-1 font-semibold  ">
        by {article.author} {date}
        <VoteModifier article_id={article.article_id} votes={article.votes} />
      </h3>
      
      <CommentAdder article_id={article.article_id} setComments={setComments} />
      <div>
        <Comments comments={comments} setComments={setComments} />
      </div>
    </section>
  );
};

export default SingleArticle;
