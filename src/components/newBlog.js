import React, { useState } from "react";
import axios from "axios";
import "../newBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useToken } from "../LoginContext";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const { auth } = useToken();

  const handleAddNewBlog = async (e) => {
    e.preventDefault();
    const addNewBlog = {
      title,
      header,
      content,
      author,
      date,
    };

    try {
      const response = await axios.post(
        "/api/v1/blogs",
        addNewBlog
      );
      if (response.status === 201) {
        console.log(response);
        setTitle("");
        setHeader("");
        setContent("");
        setAuthor("");
        setDate("");
      } else {
        alert("Error adding post. Please try again.");
      }
    } catch (e) {
      console.error("Error:", e);
      console.log("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="new-blog-post-container">
      {auth ? (
        <>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <ReactQuill
            className="textarea"
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
            placeholder="Content"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" onClick={handleAddNewBlog}>
            POST
          </button>
        </>
      ) : (
        <p>Please log in to see the information.</p>
      )}
    </div>
  );
};

export default NewBlog;
