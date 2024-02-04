import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findPostById } from "../../../services/post.service";
import formatDate from "../../../utils/formatDate";
import { Category, ContainerPost, Content, MenuBody, PostCard, Published, Title } from "./Style";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";

export const SinglePost = () => {
  const [post, setPost] = useState<any>([]);
  const { id } = useParams();
  console.log(id);
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await findPostById(Number(id));
      setPost(post);
    }
    fetchPost();
  }, [id]);

  return (
    <ContainerPost>
    <MenuBody>
      <Link to="/"><FaArrowLeft size={15} /> Back</Link>
      <h3>Single post</h3>
      <Link to="/create-post"><span><p>New post</p> <FaPlusCircle size={20} /></span></Link>
    </MenuBody>
      {post.map((post: any) => (
        <PostCard key={post.id}>
          <Title>
            {post.title}
          </Title>
          <Published>
            <span>Author: {post.user?.displayName}</span>
            <span>Published in: {formatDate(post.published)}</span>
          </Published>
          <Content>{post.content}</Content>
          <Category>
            <span>
              {post.categories?.map((category: any) => (
              <span key={category.id}>
                <span className="category-item" >{category.name}</span>
                {' '}
              </span>
            ))}
            </span>
          </Category>
        </PostCard>
      ))}
    </ContainerPost>
  );
};