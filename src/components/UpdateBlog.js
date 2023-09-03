import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../newBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const response = await axios.get(`/api/v1/blogs/${id}`);
        const blogPost = response.data.data.blogPosts;
        setTitle(blogPost.title);
        setContent(blogPost.content);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    }
    fetchBlogPost();
  }, [id]);

  const handleUpdatePost = async () => {
    const updatedPost = {
      title,
      content,
    };

    try {
      const response = await axios.patch(`/api/v1/blogs/${id}`, updatedPost);
      if (response.status === 200) {
        setTitle("");
        setContent("");
      } else {
        alert("Error updating post. Please try again.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating. Please try again later.");
    }
  };
  return (
    <div className="new-blog-post-container">
      <h2 className="heading-blog">Edit Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill
        className="textarea"
        theme="snow"
        value={content}
        onChange={(value) => setContent(value)}
        placeholder="Content"
      />
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default UpdateBlog;
