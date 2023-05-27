import React, { useEffect, useState } from "react";
import axios from "axios";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <div>
      <h4>PostList</h4>
      {posts.map((p) => (
        <li key={p.id}>
          <div className="div">
            <div className="userId">userId: {p.userId}</div>
            <div className="title">Title: {p.title}</div>
            <div className="body">Body: {p.body}</div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default PostList;
