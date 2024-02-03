import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";

export const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-user" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
