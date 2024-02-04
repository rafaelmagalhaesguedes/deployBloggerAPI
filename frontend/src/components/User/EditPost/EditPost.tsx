import { useEffect, useState } from 'react';
import { findPostById, updatePost } from '../../../services/post.service';
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
      }
    }
    fetchPost();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await updatePost(id, title, content);
    
    if (response) {
      Swal.fire({
        title: 'Post updated successfully',
        icon: 'success',
        timer: 2000,
      });
      return;

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
        <Link to="/user-posts"><FaArrowLeft size={15} /> Back</Link>
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