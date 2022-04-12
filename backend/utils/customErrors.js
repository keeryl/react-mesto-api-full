const {
  ERROR_401,
  ERROR_403,
  ERROR_404,
  ERROR_409,
} = require('./constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_409;
  }
}

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_401;
  }
}

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_403;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_404;
  }
}

module.exports = {
  ConflictError,
  NotFoundError,
  AuthError,
  ForbiddenError,
};
