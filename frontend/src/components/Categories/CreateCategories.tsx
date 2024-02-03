import { CategoryContainer } from "./Style";
import { Link } from "react-router-dom";
import { useCreateCategory } from "../../hooks/catregoryHook";
import { FaArrowLeft } from "react-icons/fa";

const CreateCategory = () => {
  const { name, setName, handleCreateCategory } = useCreateCategory();

  return (
    <CategoryContainer>
      <Link to="/"><FaArrowLeft size={15} /> Back</Link>
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