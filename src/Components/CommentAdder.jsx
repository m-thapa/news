import React from "react";
import { useState } from "react";
import { postComments } from "../utils/api";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    setNewComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsValid(true);

    postComments(article_id, newComment)
      .then((postedComment) => {
        // console.log("POSTED COMMENT", postedComment);
        setComments((comments) => {
          return [...comments, postedComment];
        });
        setIsValid(false);
      })
      .catch((err) => {
        setIsValid(false);
        setError(err);
      });
    setNewComment("");
  };
  if (isValid) return <p> Posting...</p>;
  if (error) return error;

  return (
    <>
      <div className="container mx-auto my-auto bg-white p-8 rounded-md shadow-md ">
        <form onSubmit={submitHandler}>
          <div className="mb-4 block text-gray-700 font-medium">
            <input
              placeholder="Add comment"
              type="text"
              onChange={changeHandler}
              value={newComment}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentAdder;
