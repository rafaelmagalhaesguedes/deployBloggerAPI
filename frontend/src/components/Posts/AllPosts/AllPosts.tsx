import { useEffect, useState } from "react";
import { ContainerPosts, Post, PostCard, SearchBar, Title } from "./Style";
import { findAllPosts, searchPost } from "../../../services/post.service";
import formatDate from "../../../utils/formatDate";
import trimContent from "../../../utils/trimContent";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    const posts = await searchPost(searchQuery);
    setPosts(posts);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await findAllPosts();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <ContainerPosts>
      <Title>
        <h2>All Posts</h2>
        <SearchBar>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search for a post..."
          />
          <button onClick={handleSearch}>Search</button>
        </SearchBar>
        <Link to="/create-post">New Post</Link>
        <Link to="/user-posts">My Posts</Link>
        <Link to="/">All Posts</Link>
        <Link to="/categories">Categories</Link>
      </Title>
      <Post>
        {posts.map((post: any) => (
          <PostCard key={post.id}>
            <h3>{post.title}</h3>
            <div>
              <span>Author: {post.user.displayName}</span>
              <span>Published in: {formatDate(post.published)}</span>  
            </div>
            <div className="content-value">
              <Link to={`/single-post/${post.id}`}><p>{trimContent(post.content, 30)}</p></Link>
            </div>
            <span className="read-more">
              <Link to={`/single-post/${post.id}`}>Read more</Link>
            </span>
            <span>
              <span className="category">
                {post.categories.map((category: any) => (
                  <span className="category-item" key={category.id}>
                    {category.name}
                  </span>
                ))}
              </span>
            </span>
          </PostCard>
        ))}
      </Post>
    </ContainerPosts>
  );
};