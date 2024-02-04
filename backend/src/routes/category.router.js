const express = require('express');
const { categoryController } = require('../controllers');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

// Route to create a new category
router.post('/', authenticate, categoryController.createCategory);

// Route to get all categories
router.get('/', authenticate, categoryController.getAllCategories);

// Route to delete a category
router.delete('/:id', authenticate, categoryController.deleteCategory);

module.exports = router;