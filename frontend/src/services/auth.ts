import axios from "axios";

const HOST = "backend-production-79ba.up.railway.app";
const PROTOCOL = "https";

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