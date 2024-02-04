import { useEffect, useState } from 'react';
import { findPostById } from '../../../services/post.service';
import { Container, Form, Button, MenuBody } from './Style';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import Swal from 'sweetalert2';

export const EditPost = () => {
  const { id } = useParams() as { id: any};
  const [post, setPost] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await findPostById(id);
      if (posts.length > 0) {
        const post = posts[0];
        setPost(post);
        setTitle(post.title);
        setContent(post.content);

        console.log('Post fetched successfully');
        console.log(post);
        console.log(post.title);
        console.log(post.content);
      }
    }
    fetchPost();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title,
      content
    };

    const response = await fetch(`http://localhost:3001/post/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("@Auth:access_token")}`,
      },
      body: JSON.stringify(data)
    });

    console.log(response);
    

    if (response.ok) {
      const updatedPost = await response.json();
      setPost(updatedPost);
      setTitle(updatedPost.title);
      setContent(updatedPost.content);
      console.log('Post updated successfully');
      
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

  return (
    <Container>
      <MenuBody>
        <Link to="/"><FaArrowLeft size={15} /> Back</Link>
        <h3>Edit post</h3>
        <Link to="/user-posts"><span><p>My posts</p> <FaBookOpen /></span></Link>
      </MenuBody>
      <Form>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button onClick={handleEdit}>Edit</Button>
      </Form>
    </Container>
  )
};