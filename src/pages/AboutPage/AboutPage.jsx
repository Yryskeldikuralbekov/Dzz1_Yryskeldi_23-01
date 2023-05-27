import React, { useState } from "react";
import axios from "axios";

const CreatePostList = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: userId,
        title: title,
        body: body,
      })
      .then((response) => {
        console.log(response);
        setUserId("");
        setTitle("");
        setBody("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <div>
      <h1>Create Post:</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <div>
            <label>
              UserId:
              <input
                className="input"
                type="number"
                value={userId}
                onChange={handleUserIdChange}
              />
            </label>
          </div>
          <div>
            <label>
              Title:
              <input
                className="input"
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Body:
              <textarea
                className="input"
                value={body}
                onChange={handleBodyChange}
              />
            </label>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostList;
