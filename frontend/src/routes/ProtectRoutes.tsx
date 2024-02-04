import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "../components/User/CreatePost/CreatePost";
import { UserPosts } from "../components/User/UserPosts/UserPosts";
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Profile from "../pages/Profile/Profile";
import { Home } from "../pages/Home/Home";
import { SinglePost } from "../components/Posts/SinglePost/SinglePost";
import { EditPost } from "../components/User/EditPost/EditPost";

export const ProtectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/single-post/:id" element={<SinglePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/user-posts" element={<UserPosts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
