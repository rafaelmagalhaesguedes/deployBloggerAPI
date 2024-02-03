const { postValidate } = require('./validations');
const { postRepository } = require('./repository');

const createPost = async ({ title, content, categoryIds }, userId) => {
  postValidate.validatePostBody({ title, content, categoryIds });
  await postValidate.validateCategory(categoryIds);

  const newPost = await postRepository.create({ title, content, categoryIds, userId });

  return { status: 'CREATED', data: newPost };
};

const getAllPosts = async () => {
  const posts = await postRepository.findAll();
  
  if (!posts) return { status: 'NOT_FOUND', data: { message: 'Posts does not exist' } };

  return { status: 'SUCCESSFUL', data: posts };
};

const getPostsByUserId = async (userId) => {
  const posts = await postRepository.findAllByUserId(userId);

  if (!posts) return { status: 'NOT_FOUND', data: { message: 'Posts does not exist' } };

  return { status: 'SUCCESSFUL', data: posts };
};

const getPostById = async (id) => {
  const post = await postRepository.findById(id);

  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  return { status: 'SUCCESSFUL', data: post };
};

const updatePost = async (id, { title, content }, userId) => {
  postValidate.validatePostBody({ title, content, categoryIds: [] });
  const post = await postValidate.checkPostExist(id);
  postValidate.checkUserIsAuthor(post, userId);

  const postUpdated = await postRepository.update(id, { title, content }, userId);
  
  return { status: 'SUCCESSFUL', data: postUpdated };
};

const deletePost = async (postId, userId) => {
  await postValidate.validateUserToDeletePost(postId, userId);

  const { status, data } = await postRepository.destroy(postId);
  
  return { status, data };
};

const searchPosts = async (searchString) => {
  if (searchString === '') return getAllPosts();
  
  const searchResult = await postRepository.search(searchString);

  return { status: 'SUCCESSFUL', data: searchResult };
};

module.exports = {
  createPost, getAllPosts, getPostById, updatePost, deletePost, searchPosts, getPostsByUserId };