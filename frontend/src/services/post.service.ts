import { PostType } from "../types/types";

export const createPost = async (userId: number, title: string, content: string, categoryIds: number[]) => {
  const res = await fetch("http://localhost:3001/post", {
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
  const res = await fetch("http://localhost:3001/post", {
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
  const res = await fetch(`http://localhost:3001/post/${id}`, {
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

  const response = await fetch(`http://localhost:3001/post/${postId}`, {
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
  const res = await fetch(`http://localhost:3001/post/search?q=${searchQuery}`, {
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