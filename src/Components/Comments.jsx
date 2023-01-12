import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";

const Comments = ({ comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (comments.length === 0) return <p>Nothing to display</p>;

  return (
    <ul>
      <p>Comments:</p>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment-list">
            <p>{comment.author}</p>
            <p className="comment-body">{comment.body}</p>
            <p>Posted on: {comment.created_at.split("T")[0]}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
