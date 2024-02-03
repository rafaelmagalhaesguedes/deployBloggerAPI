import { useState } from 'react';
import { getPosts, editPost, deletePost } from '../services/user.service';
import { PostType } from "../types/types";
import Swal from 'sweetalert2';

export const userHook = (userId: string) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingPostData, setEditingPostData] = useState<any | null>(null);

  const fetchPosts = async () => {
    const data = await getPosts(userId);
    setPosts(data);
  }

  const handleEdit = async (postId: number) => {
    if (editingPostId === postId && editingPostData) {
      const success = await editPost(postId, editingPostData);
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
      setEditingPostData(posts.find(post => post.id === postId));
    }
  }

  const handleDelete = async (postId: number) => {
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
      const success = await deletePost(postId);
      if (success) {
        setPosts(posts.filter(post => post.id !== postId));
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
    posts,
    editingPostId,
    editingPostData,
    fetchPosts,
    handleEdit,
    handleDelete,
    setEditingPostData
  };
}