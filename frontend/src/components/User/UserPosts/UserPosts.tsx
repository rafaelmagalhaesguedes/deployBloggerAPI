import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import { getPosts, editPost, deletePost } from '../../../services/user.service';
import { PostType, UserType } from "../../../types/types";
import formatDate from "../../../utils/formatDate";
import { UserPostsContainer } from "./Style";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const UserPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingPostData, setEditingPostData] = useState<any | null>(null);
  const { user } = useAuth() as { user: UserType };
  const { id } = user;

  const handleEdit = async (postId: number) => {
    if (editingPostId === postId && editingPostData) {
      const success = await editPost(postId, editingPostData);
      if (success) {
        setEditingPostId(null);
        setEditingPostData(null);
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

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts(id);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <UserPostsContainer>
      <Link to="/">Back</Link>
      <br /><br />
      <h2>My Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Published</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {posts && posts.map((post: any) => (
          <tr key={post.id}>
            <td>
              {editingPostId === post.id ? (
                <input value={editingPostData?.title} onChange={e => setEditingPostData({ ...editingPostData, title: e.target.value })} />
              ) : (
                post.title
              )}
            </td>
            <td>
              {editingPostId === post.id ? (
                <input value={editingPostData?.content} onChange={e => setEditingPostData({ ...editingPostData, content: e.target.value })} />
              ) : (
                post.content
              )}
            </td>
            <td>
              {post.user.displayName}
            </td>
            <td>
              {formatDate(post.published)}
            </td>
            <td>
              {formatDate(post.updated)}
            </td>
            <td>
              <div className="buttons">
                <button onClick={() => handleEdit(post.id)}>{editingPostId === post.id ? 'Save' : 'Edit'}</button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </UserPostsContainer>
  );
};