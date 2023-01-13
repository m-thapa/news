import { useState } from "react";
import { patchArticle } from "../utils/api";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

const VoteModifier = ({ article_id, votes }) => {
  const [articleVoteInc, setArticleVoteInc] = useState(0);
  const [err, setErr] = useState(null);

  const upVote = (article_id) => {
    setArticleVoteInc((currVoteInc) => currVoteInc + 1);
    patchArticle(article_id, 1).catch((err) => {
      setErr("Error try again");
      setArticleVoteInc((currVoteInc) => currVoteInc - 1);
    });
  };

  const downVote = (article_id) => {
    setArticleVoteInc((currVoteInc) => currVoteInc - 1);
    patchArticle(article_id, -1).catch((err) => {
      setErr("Error try again");
      setArticleVoteInc((currVoteInc) => currVoteInc - 1);
    });
  };

  if (err) return err;

  return (
    <section>
      <p className="article-vote"> Votes: {votes + articleVoteInc} </p>
      <MdThumbUp
        className="upvote-btn"
        onClick={() => {
          upVote(article_id);
        }}
      />
      <MdThumbDown
        className="downvote-btn"
        onClick={() => {
          downVote(article_id);
        }}
      />
    </section>
  );
};

export default VoteModifier;
