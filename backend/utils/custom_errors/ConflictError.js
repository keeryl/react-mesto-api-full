const {
  ERROR_409,
} = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_409;
  }
}

module.exports = {
  ConflictError,
};
