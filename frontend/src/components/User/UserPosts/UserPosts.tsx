import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import formatDate from "../../../utils/formatDate";
import { UserPostsContainer } from "./Style";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type User = {
  id: string;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  published: Date;
  updated: Date;
  user: User;
};

export const UserPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingPostData, setEditingPostData] = useState<any | null>(null);
  const { user } = useAuth() as { user: User };
  const { id } = user;

  const getPosts = async () => {
    if (id) {
      const res = await fetch(`http://localhost:3001/post/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      
      setPosts(data);
    }
  };

  const handleEdit = async (postId: number) => {
    if (editingPostId === postId && editingPostData) {
      const res = await fetch(`http://localhost:3001/post/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
        body: JSON.stringify(editingPostData),
      });

      if (res.ok) {
        getPosts();
        setEditingPostId(null);
        setEditingPostData(null);
        Swal.fire({
          title: "Post edited",
          icon: "success",
        });
      } else {
        console.error("Erro ao editar o post");
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  
    if (result.isConfirmed) {
      const res = await fetch(`http://localhost:3001/post/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
        },
      });
  
      if (res.ok) {
        getPosts();
        Swal.fire({
          title: "Post deleted",
          icon: "success",
        });
      } else {
        // Se houver um erro, você pode tratá-lo aqui
        console.error("Erro ao deletar o post");
      }
    }
  }
    
  useEffect(() => {
    getPosts();
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