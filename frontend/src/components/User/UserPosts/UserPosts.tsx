import { useEffect } from "react";
import { useAuth } from "../../../context/auth";
import { UserType } from "../../../types/types";
import { UserPostsContainer, Post, PostTitle, PostContent, PostFooter, PostHeader, PostCategory } from "./Style";
import { userHook } from "../../../hooks/userHook";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formatDate";
import { FaArrowLeft, FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import trimContent from "../../../utils/trimContent";
import { MenuBody } from "../EditPost/Style";

export const UserPosts = () => {
  const { user } = useAuth() as { user: UserType };
  const { id } = user;
  const {
    userPosts,
    fetchUserPosts,
    handleDeleteUserPost,
  } = userHook();

  useEffect(() => {
    fetchUserPosts(id);
  }, [id]);

  return (
    <UserPostsContainer>
      <MenuBody>
        <Link to="/"><FaArrowLeft size={15} /> Back</Link>
        <h3>My Posts</h3>
        <Link to="/create-post"><span><p>New post</p> <FaPlusCircle size={20} /></span></Link>
      </MenuBody>
      {userPosts && userPosts.length > 0 ? (
        userPosts.map((post: any) => (
          <Post key={post.id}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <div>
                <button><Link to={`/edit-post/${post.id}`}>Edit</Link></button>
                <button onClick={() => handleDeleteUserPost(post.id)}>Delete</button>
              </div>
            </PostHeader>
            <PostFooter>
              <div>Author: {post.user.displayName}</div>
              <div>Published in: {formatDate(post.published)}</div>
              <div>Updated in: {formatDate(post.updated)}</div>
            </PostFooter>
            <PostContent><Link to={ `/single-post/${post.id}` }>{trimContent(post.content, 50)}</Link></PostContent>
            <PostCategory>
              {post.categories.map((category: any) => (
                <span key={category.id}>{category.name}</span>
              ))}
            </PostCategory>
          </Post>
        ))
      ) : (
        <p>You have not published any posts yet.</p>
      )}
    </UserPostsContainer>
  );
};