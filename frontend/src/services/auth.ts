import axios from "axios";

const HOST = process.env.REACT_APP_API_URL || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

export const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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