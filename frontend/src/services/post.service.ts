import { PostType } from "../types/types";

const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";
const HOST = process.env.REACT_APP_API_HOST || "localhost";
const BASE_URL = `${PROTOCOL}://${HOST}/post`;

export const createPost = async (userId: number, title: string, content: string, categoryIds: number[]) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify({
      id: userId,
      title: title,
      content: content,
      categoryIds: categoryIds,
    }),
  });

  if (res.status !== 201) {
    const data = await res.json();
    throw new Error(data.message);
  }

  return res.json();
}

export const findAllPosts = async () => {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
}

export const findPostById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  const data = await res.json();
  return data;
}

export const updatePost = async (postId: number, title: string, content: string) => {
  const data = { title, content };

  const response = await fetch(`${BASE_URL}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  } else {
    throw new Error("Failed to update post");
  }
}

export const searchPost = async (searchQuery: string) => {
  const res = await fetch(`${BASE_URL}/search?q=${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
  });
  let data = await res.json();
  data = data.sort((a: PostType, b: PostType) => b.id - a.id);
  return data;
}