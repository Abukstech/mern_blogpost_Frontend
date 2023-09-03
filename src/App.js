import { React } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import BlogPost from "./components/blogPost";
import SignUp from "./components/signup";
import Login from "./components/login";
import RootLayout from "./layouts/RootLayout";
import NewBlog from "./components/newBlog";
import UpdateBlog from "./components/UpdateBlog";
import TogglePage from "./components/TogglePage";
import UserProfile from "./components/UserProfile";
import BlogpostLayout from "./layouts/BlogpostLayout";
import BlogDetails from "./components/BlogDetails";
import { LoginProvider } from "./LoginContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<TogglePage />} />
      <Route path="blogposts" element={<BlogpostLayout />}>
        <Route index element={<BlogPost />} />
        <Route path=":id" element={<BlogDetails />} />
        <Route path="update/:id" element={<UpdateBlog />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<UserProfile />} />
      <Route path="create" element={<NewBlog />} />
    </Route>
  )
);

const App = () => {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  );
};

export default App;

/* <div>
        <BlogPost />
        // {/* <SignUp /> */
// {/* <Login /> */}
// </div> */}
