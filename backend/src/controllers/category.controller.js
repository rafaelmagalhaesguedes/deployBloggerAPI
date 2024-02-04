const { categoryService } = require('../services');
const { httpStatus } = require('../utils/httpStatus');

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const { status, data } = await categoryService.createCategory(name);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const { status, data } = await categoryService.getAllCategories();
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_ERROR).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, data } = await categoryService.deleteCategory(id);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_ERROR).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
};