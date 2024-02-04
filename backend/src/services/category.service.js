const { Op } = require('sequelize');
const { Category, PostCategory } = require('../models');
const { httpError } = require('../utils/httpErrors');

const createCategory = async (name) => {
  if (!name) throw httpError('"name" is required', 400);
  
  const category = await Category.create({ name });

  return { status: 'CREATED', data: category };
};

const createPostCategory = async (categoryIds, postId) => {
  const categories = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } });
  const postCategories = categories.map((category) => ({ postId, categoryId: category.id }));

  await PostCategory.bulkCreate(postCategories);
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  
  return { status: 'SUCCESSFUL', data: categories };
};

const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw httpError('Category not found', 404);

  // Delete associated posts
  await PostCategory.destroy({ where: { categoryId: id } });

  // Then delete the category
  await category.destroy();

  return { status: 'SUCCESSFUL', data: category };
};

module.exports = {
  createCategory,
  createPostCategory,

  getAllCategories,
  deleteCategory,
};