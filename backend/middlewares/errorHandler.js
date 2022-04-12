const {
  ERROR_500,
} = require('../utils/constants');

module.exports.errorHandler = (err, req, res, next) => {
  const status = err.statusCode || ERROR_500;

  res.status(status).send({
    message: err.message || 'Произошла ошибка на сервере',
    err,
  });

  return next();
};
