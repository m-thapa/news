import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";

const Comments = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id, setComments]);

  if (isLoading) return <p>Loading ...</p>;
  if (comments.length === 0) return <p>Nothing to display</p>;

  return (
    <section className="mt-10 space-x-2 space-y-2">
      <p className=" font-semibold mb-4 ">Comments</p>
      {comments.map((comment) => {
        return (
          <li className="" key={comment.comment_id}>
            <p className="comment-body">{comment.body}</p>
            <p className="font-semibold italic">
              {comment.author} Posted on: {comment.created_at.split("T")[0]}
            </p>
          </li>
        );
      })}
    </section>
  );
};

export default Comments;
