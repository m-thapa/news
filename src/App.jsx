import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
