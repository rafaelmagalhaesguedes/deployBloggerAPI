import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreatePostButton, CreatePostContainer } from "./Style";
import { findCategories } from "../../../services/category.service";

export const CreatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await findCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleCreatePost = async () => {
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
        categoryIds: selectedCategories.map(Number),
      }),
    });
    const data = await res.json();

    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "Post created",
        showConfirmButton: false,
        timer: 1500,
      });
      setTitle("");
      setContent("");
      setSelectedCategories([]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
  };

  const handleCheckboxChange = (event: any) => {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category: any) => category !== value));
    }
  };

  return (
    <CreatePostContainer>
      <Link to="/">Back</Link>
      <br />
      <h1>Create new post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <ul>
        {categories.map((category: any) => (
          <li key={category.id}>
            <input
              type="checkbox"
              id={`category-${category.id}`}
              value={category.id}
              checked={selectedCategories.includes(category.id)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`category-${category.id}`}>{category.name}</label>
          </li>
        ))}
      </ul>
      <CreatePostButton onClick={handleCreatePost}>Create Post</CreatePostButton>
    </CreatePostContainer>
  );
};