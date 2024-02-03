import { useEffect, useState } from "react";
import { ContainerPosts, Post, PostCard, SearchBar, Title } from "./Style";
import { findAll, searchPost } from "../../services/post.service";
import formatDate from "../../utils/formatDate";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(posts);
  

  const handleSearch = async () => {
    const posts = await searchPost(searchQuery);
    setPosts(posts);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await findAll();
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
        <a href="/create-post">New Post</a>
        <a href="/user-posts">My Posts</a>
        <a href="/">All Posts</a>
      </Title>
      <Post>
        {posts.map((post: any) => (
          <PostCard key={post.id}>
            <h3>{post.title}</h3>
            <div>
              <span>Author: {post.user.displayName}</span>
              <span>Published in: {formatDate(post.published)}</span>  
            </div>
            <p>{post.content}</p>
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