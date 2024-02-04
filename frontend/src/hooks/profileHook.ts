import { useState } from 'react';
import { useAuth } from '../context/auth';
import { updateUserProfile } from '../services/profile.service';
import Swal from 'sweetalert2';

export const useProfile = () => {
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
      const res = await updateUserProfile(user.id, displayName, email, image);

      if (res) {
        setEditing(false);
          Swal.fire({
            title: "Profile updated",
            icon: "success",
            timer: 2500,
          });
      } else {
        console.error("Error editing profile");
      }
    }
  };

  return {
    user,
    editing,
    setEditing,
    displayName,
    setDisplayName,
    email,
    setEmail,
    image,
    setImage,
    handleLogout,
    handleEdit
  };
}