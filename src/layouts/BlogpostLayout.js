import React from "react";
import {  Outlet } from "react-router-dom";

import "../index.css";

const BlogpostLayout = () => {
  return (
    <>
      <div className="blog-layout">
        <h2 className="yipada">yipada.ng</h2>

        <Outlet />
      </div>
    </>
  );
};

export default BlogpostLayout;
