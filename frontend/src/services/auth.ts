import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";
const PORT = process.env.REACT_APP_API_PORT || "3001";

export const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}:${PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("@Auth:access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      } as any;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);