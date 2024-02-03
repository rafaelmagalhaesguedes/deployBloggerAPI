import { useState } from "react";
import { useAuth } from "../../context/auth";
import { UserType } from "../../types/types";
import { ProfileContainer } from "./Style";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  const { user, Logout } = useAuth() as any;
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);

  const handleLogout = () => {
    Logout();
  };

  const handleEdit = async () => {
    if (!editing) {
      setEditing(true);
    } else {
      const res = await fetch(`http://localhost:3001/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
        body: JSON.stringify({ displayName, email, image }),
      });

      if (res.ok) {
        setEditing(false);
      } else {
        console.error("Erro ao editar o perfil");
      }
    }
  };

  return (
    <ProfileContainer>
      <div>
        <h2>Profile</h2>
        {editing ? (
          <input value={image || ''} onChange={e => setImage(e.target.value)} />
        ) : (
          image ? <img src={image} alt={displayName} /> : <FaUserAlt size={100}/>
        )}
        <p><strong>User: </strong> {editing ? <input value={displayName} onChange={e => setDisplayName(e.target.value)} /> : displayName}</p>
        <p><strong>Email: </strong>{editing ? <input value={email} onChange={e => setEmail(e.target.value)} /> : email}</p>
        <button onClick={handleEdit}>{editing ? "Save" : "Edit Profile"}</button>
        <Link to="/" onClick={handleLogout}>Logout</Link>
        <Link to="/">Back to home</Link>
      </div>
    </ProfileContainer>
  );
};

export default Profile;