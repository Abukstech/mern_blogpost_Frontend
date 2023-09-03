import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="blogposts">HOME</NavLink>
          <NavLink to="/">LOGIN</NavLink>
          <NavLink to="create">POST BLOG</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
