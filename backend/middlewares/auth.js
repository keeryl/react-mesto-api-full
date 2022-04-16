const jwt = require('jsonwebtoken');
require('dotenv').config({ debug: true });

const { NODE_ENV, JWT_SECRET } = process.env;

const {
  AuthError,
} = require('../utils/custom_errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthError('Доступ запрещён. Необходима авторизация'));
  }
  req.user = payload;

  return next();
};
