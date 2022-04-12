const jwt = require('jsonwebtoken');

const {
  JWT_SECRET,
} = require('../utils/constants');

const {
  AuthError,
  // ForbiddenError,
} = require('../utils/customErrors');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new AuthError('Доступ запрещён. Необходима авторизация'));
  }
  req.user = payload;

  return next();
};
