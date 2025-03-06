import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import PostPage from "./views/PostPage";
import AddEditPost from "./views/AddEditPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/create" element={<AddEditPost />} />
      </Routes>
    </>
  );
}

export default App;
