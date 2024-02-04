import { useState } from 'react';
import { getUserPosts, editUserPost, deleteUserPost } from '../services/user.service';
import { PostType } from "../types/types";
import Swal from 'sweetalert2';

export const userHook = () => {
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  const fetchUserPosts = async (userId: any) => {
    const data = await getUserPosts(userId);
    setUserPosts(data);
  }

  const handleEditUserPost = async (postId: number, title: string, content: string) => {
    const data = { title, content };

    const response = await fetch(`http://localhost:3001/post/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const updatedPost = await response.json();
      setUserPosts(userPosts.map((post) => post.id === postId ? updatedPost : post));
      Swal.fire({
        title: 'Post updated successfully',
        icon: 'success',
        timer: 2000,
      });
    } else {
      console.error('Failed to update post');
      Swal.fire({
        title: 'Failed to update post',
        icon: 'error',
        timer: 2000,
      });
    }
  }

  const handleDeleteUserPost = async (postId: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  
    if (result.isConfirmed) {
      const success = await deleteUserPost(postId);
      if (success) {
        setUserPosts(userPosts.filter((post) => post.id !== postId));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your post has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }

  return {
    userPosts,
    fetchUserPosts,
    handleEditUserPost,
    handleDeleteUserPost,
  };
}