import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-gyb2.onrender.com/api",
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
