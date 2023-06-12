import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
