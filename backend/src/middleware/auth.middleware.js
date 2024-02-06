const { splitToken, verifyToken } = require('../utils/auth');
const { httpStatus } = require('../utils/httpStatus');

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Origin', '*'); // replace '*' with your domain if you want to restrict access
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
 */
const accessControl = (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Origin', '*'); // replace '*' with your domain if you want to restrict access
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const token = splitToken(authorization);
    const user = verifyToken(token);

    req.user = user;
    next();
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { 
  authenticate,
  accessControl,
};