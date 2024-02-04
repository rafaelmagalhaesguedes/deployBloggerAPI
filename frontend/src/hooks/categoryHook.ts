import { useState, useEffect } from 'react';
import { createCategory, getCategories, updateCategory, deleteCategory } from '../services/category.service';
import Swal from "sweetalert2";

export const useCategory = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

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
      fetchCategories();
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

  const handleEditCategory = async (id: any, newName: string) => {
    try {
      await updateCategory(id, newName);
      Swal.fire({
        icon: "success",
        title: "Category updated",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchCategories();
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

  const handleDeleteCategory = async (id: any) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteCategory(id);
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
        fetchCategories();
      } catch (error) {
        if (error instanceof Error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      }
    }
  };

  return {
    name,
    setName,
    categories,
    handleCreateCategory,
    handleEditCategory,
    handleDeleteCategory
  };
}