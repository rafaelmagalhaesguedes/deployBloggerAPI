const { userService } = require('../services');
const { httpStatus } = require('../utils/httpStatus');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const { status, data } = await userService.createUser(userData);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { status, data } = await userService.getAllUsers();
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_ERROR).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, data } = await userService.getUserById(id);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const { status, data } = await userService.updateUser(id, userData);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id, email } = req.user;
  try {
    const { status, data } = await userService.deleteUser(id, email);
    return res.status(httpStatus[status]).json(data);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
};