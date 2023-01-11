import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-gyb2.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data;
  });
};
