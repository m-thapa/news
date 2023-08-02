import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-z9e7.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticle = (article_id, increaseOrDecrease) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: increaseOrDecrease })
    .then((res) => {
      return res.data;
    }); 
  };

export const postComments =(article_id, newComment) => {
      return newsApi
      .post(`/articles/${article_id}/comments`, {
        username: "grumpy19",
        body: newComment
      }).then((res)=> {
        return res.data.comment
      })
}
 
// export const getArticleByQuery = (topic)=> {
//   return newsApi
//   .get(`/articles`, {
//     params:{topic:topic},
//   }).then((res)=> {
//     return res.data
//   })
// }
