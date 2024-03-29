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
  }, [article_id, setComments]);

  if (isLoading) return <p>Loading ...</p>;
  if (comments.length === 0) return <p>Nothing to display</p>;

  return (
    <section className="mt-10 space-x-2 space-y-2">
      <p className=" font-semibold mb-4 ">Comments</p>
      {comments.map((comment) => {
        return (
          <ul key={comment.comment_id}>
            <p className="comment-body">{comment.body}</p>
            <p className="font-semibold italic">
              {comment.author} Posted on: {comment.created_at.split("T")[0]}
            </p>
            <p className="border"></p>
          </ul>
        );
      })}
    </section>
  );
};

export default Comments;
