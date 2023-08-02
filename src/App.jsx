import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import Coding from "./Pages/Coding";
import Cooking from "./Pages/Cooking";
import Football from "./Pages/Football";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/coding" element={<Coding />}></Route>
        <Route path="/cooking" element={<Cooking />}></Route>
        <Route path="/football" element={<Football />}></Route>
      </Routes>
    </div>
  );
}

export default App;
