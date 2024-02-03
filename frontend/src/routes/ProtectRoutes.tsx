import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "../components/User/CreatePost/CreatePost";
import { UserPosts } from "../components/User/UserPosts/UserPosts";
import CreateCategory from "../components/Categories/CreateCategories";
import Layout from "../components/Layout/Layout";
import Profile from "../pages/Profile/Profile";
import { Home } from "../pages/Home/Home";

export const ProtectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/user-posts" element={<UserPosts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
