import axios from "axios";

const HOST = 'backend-blogs-api-production.up.railway.app';
const PROTOCOL = "https";

export const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("@Auth:access_token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as any;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);