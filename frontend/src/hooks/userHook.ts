import { useState } from 'react';
import { getUserPosts, editUserPost, deleteUserPost } from '../services/user.service';
import { PostType } from "../types/types";
import Swal from 'sweetalert2';

export const userHook = (userId: string) => {
  const [userPosts, setUserPosts] = useState<PostType[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingPostData, setEditingPostData] = useState<any | null>(null);

  const fetchUserPosts = async () => {
    const data = await getUserPosts(userId);
    setUserPosts(data);
  }

  const handleEditUserPost = async (postId: number) => {
    if (editingPostId === postId && editingPostData) {
      const success = await editUserPost(postId, editingPostData);
      if (success) {
        setEditingPostId(null);
        setEditingPostData(null);
        Swal.fire({
          title: "Post edited",
          icon: "success",
      });
      }
    } else {
      setEditingPostId(postId);
      setEditingPostData(userPosts.find((post) => post.id === postId));
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
    editingPostId,
    editingPostData,
    fetchUserPosts,
    handleEditUserPost,
    handleDeleteUserPost,
    setEditingPostData
  };
}