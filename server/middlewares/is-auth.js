const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 // setting the auth header
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];

  let tokenDecoded;
  try {
    tokenDecoded = jwt.verify(token, 'somesupersupersecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!tokenDecoded) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = tokenDecoded.userId;
  next();
};
