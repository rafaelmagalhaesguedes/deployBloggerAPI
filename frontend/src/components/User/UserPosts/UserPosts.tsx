import { useEffect } from "react";
import { useAuth } from "../../../context/auth";
import { UserType } from "../../../types/types";
import { UserPostsContainer } from "./Style";
import { userHook } from "../../../hooks/userHook";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formatDate";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";

export const UserPosts = () => {
  const { user } = useAuth() as { user: UserType };
  const { id } = user;
  const {
    userPosts,
    editingPostId,
    editingPostData,
    fetchUserPosts,
    handleEditUserPost,
    handleDeleteUserPost,
    setEditingPostData
  } = userHook(id);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <UserPostsContainer>
      <div>
        <Link to="/"><FaArrowLeft size={15} /> Back</Link>
        <h3>My Posts</h3>
        <Link to="/create-post"><span><p>New post</p> <FaPlusCircle size={20} /></span></Link>
      </div>
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
          {userPosts && userPosts.length > 0 ? (
            userPosts.map((post: any) => (
              <tr key={post.id}>
                <td>
                  {editingPostId === post.id ? (
                    <input
                      value={editingPostData?.title}
                      onChange={(e) => setEditingPostData({ ...editingPostData, title: e.target.value })}
                    />
                  ) : (
                    post.title
                  )}
                </td>
                <td>
                  {editingPostId === post.id ? (
                    <input
                      value={editingPostData?.content}
                      onChange={(e) => setEditingPostData({ ...editingPostData, content: e.target.value })}
                    />
                  ) : (
                    post.content
                  )}
                </td>
                <td>{post.user.displayName}</td>
                <td>{formatDate(post.published)}</td>
                <td>{formatDate(post.updated)}</td>
                <td>
                  <div className="buttons">
                    <button
                      onClick={() => handleEditUserPost(post.id)}>{editingPostId === post.id ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={() => handleDeleteUserPost(post.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>You have not published any posts yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </UserPostsContainer>
  );
};