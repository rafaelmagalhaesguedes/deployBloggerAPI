import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CreatePostButton, CreatePostContainer } from "./Style";
import { postHook } from "../../../hooks/postHook";
import { FaArrowLeft } from "react-icons/fa";

export const CreatePost = () => {
  const { id } = useParams();
  const {
    title,
    setTitle,
    content,
    setContent,
    categories,
    selectedCategories,
    fetchCategories,
    handleCreatePost,
    handleCheckboxChange
  } = postHook(Number(id));

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CreatePostContainer>
      <Link to="/"><FaArrowLeft size={15} /> Back</Link>
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