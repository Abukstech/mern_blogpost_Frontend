import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../blogPost.css";

import { useToken } from "../LoginContext";

const BlogPost = () => {
  const [blogData, setBlogData] = useState([]);

  const navigate = useNavigate();
  const { auth } = useToken();

  const fetchBlogData = () => {
    const url = "/api/v1/blogs";
    axios.get(url).then((res) => {
      if (res.status === 401) {
        navigate("login/");
      } else {
        const data = res.data.data.blogPosts;
        setBlogData(data);
        console.log(data);
      }
    });

    // .then((res) => {
    //   const data = res.data.data.blogPosts;
    //   setBlogData(data);
    //   console.log(data);
    // });
  };

  useEffect(fetchBlogData, []);

  const handleDeleteBlogData = async (postId) => {
    try {
      await axios.delete(`/api/v1/blogs/${postId}`);
      fetchBlogData(); // Fetch updated list of posts after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
      alert(
        "An error occurred while deleting the post. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="blog-container">
        {/* <header className="blog-header">
        <h3>yipada.ng</h3>
        <button>Login</button>
        <button>SignUp</button>
      </header> */}
        {auth ? (
          blogData.map((blogPost) => (
            <Link to={blogPost._id} key={blogPost._id} className="blog-card">
              <h3>{blogPost.title}</h3>
              <h5>{blogPost.header}</h5>

              {console.log(blogPost._id)}
              <div className="metadata">
                <p>
                  {" "}
                  <span>Author :</span> {blogPost.author}
                </p>
                <p>
                  <span>Date</span> {blogPost.date}
                </p>
              </div>
              <button
                className="delete"
                onClick={() => handleDeleteBlogData(blogPost._id)}
              >
                Delete
              </button>
              {console.log(blogPost._id)}
              <button className="edit" to={`update/${blogPost._id}`}>
                Update Content
              </button>
            </Link>
          ))
        ) : (
          <p>Please log in to see the information.</p>
        )}
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BlogPost;
