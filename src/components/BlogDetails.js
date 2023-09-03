import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `/api/v1/blogs/${id}`
      );

      console.log(response);
      setPost(response.data.data.singleBlog);
    } catch (e) {
      console.log("Error fetching details :", e);
    }
  };
  const sanitizeContent = (html) => {
    const sanitizedContent = DOMPurify.sanitize(html);
    return { __html: sanitizedContent };
  };

  return (
    <div>
      {console.log(post)}
      {post ? (
        <div className="blog-details">
          <h4>Blog Content for {post.title}</h4>
          <div>
            <div className="content" dangerouslySetInnerHTML={sanitizeContent(post.content)} />
          </div>
        </div>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

export default BlogDetails;

// export const blogDetailsLoader = async ({ params }) => {
//   const { id } = params;

//   const res = await axios.get(`http://localhost:4005/api/v1/blogs/${id}`);

//   const blog = res.data.blogPosts;
//   return blog.json();
// };
