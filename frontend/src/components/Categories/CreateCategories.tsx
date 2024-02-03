import { useState } from "react";
import { CategoryContainer } from "./Style";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CreateCategory = () => {
  const [name, setName] = useState("");

  const handleCreateCategory = async () => {
    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
      });
      return;
    }
    const res = await fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await res.json();

    if (data.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.error,
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Category created",
      });
      setName("");
    }
  };

  return (
    <CategoryContainer>
      <Link to="/">Back</Link>
      <h2>Create Category</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateCategory}>Create Category</button>
    </CategoryContainer>
  );
};

export default CreateCategory;