import Swal from "sweetalert2";
import { UserType, PostType } from "../types/types";

export const findAll = async () => {
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

export const createPost = async (id: string, title: string, content: string, selectedCategories: number[]) => {
  const res = await fetch("http://localhost:3001/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
    },
    body: JSON.stringify({
      id: id,
      title: title,
      content: content,
      categoryIds: selectedCategories // Convert selected categories to numbers
    }),
  });
  
  const data = await res.json();
  return { status: res.status, data: data };
}