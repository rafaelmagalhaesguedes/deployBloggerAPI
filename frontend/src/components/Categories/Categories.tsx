import { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContainer, CategoryWrapper, CreateCategory, EditCategory } from "./Style";
import { useCategory } from "../../hooks/categoryHook";
import { FaArrowLeft, FaEdit, FaTrash, FaSave } from "react-icons/fa";

const Categories = () => {
  const { name, setName, categories, handleCreateCategory, handleEditCategory, handleDeleteCategory } = useCategory();
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <CategoryContainer>

      <CategoryWrapper>
        <CreateCategory>
          <Link to="/"><FaArrowLeft size={15} /> Back</Link>
          <h2>Create Category</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="createButton" onClick={handleCreateCategory}>Create Category</button>
        </CreateCategory>

        <EditCategory>
          <h2>Edit Categories</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: any) => (
                <tr key={category.id}>
                  <td className="name">
                    {editingId === category.id ? (
                      <input
                        type="text"
                        placeholder="New name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                    ) : (
                      category.name
                    )}
                  </td>
                  <td className="actions">
                    {editingId === category.id ? (
                      <button onClick={() => { handleEditCategory(category.id, newName); setEditingId(null); }}><FaSave /></button>
                    ) : (
                      <button onClick={() => setEditingId(category.id)}><FaEdit /></button>
                    )}
                    <button onClick={() => handleDeleteCategory(category.id)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </EditCategory>

      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Categories;