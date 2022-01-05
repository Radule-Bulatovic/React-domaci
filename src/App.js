import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import { React, Component } from "react";
import PostForm from "./Components/PostForm/PostForm";
import Post from "./Components/Post/Post";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-post" element={<PostForm />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
