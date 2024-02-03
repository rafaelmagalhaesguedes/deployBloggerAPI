import { useState } from 'react';
import { createCategory } from '../services/category.service';
import Swal from "sweetalert2";

export const useCreateCategory = () => {
  const [name, setName] = useState("");

  const handleCreateCategory = async () => {
    try {
      await createCategory(name);
      Swal.fire({
        icon: "success",
        title: "Category created",
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    }
  };

  return {
    name,
    setName,
    handleCreateCategory
  };
}