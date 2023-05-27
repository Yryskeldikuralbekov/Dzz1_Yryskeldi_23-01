import { Routes, Route, Link, NavLink } from "react-router-dom";
import CreatePostList from "./pages/AboutPage/AboutPage";
import PostList from "./pages/PostList/PostList";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h3>Home page</h3>} />
          {/* http://localhost:5173/about */}
          <Route path="/createPost" element={<CreatePostList />} />
          {/* http://localhost:5173/posts */}
          <Route path="/posts" element={<PostList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
