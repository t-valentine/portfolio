/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" exact element={<Blog />} />
      </Routes>
    </Router>
  );
}
