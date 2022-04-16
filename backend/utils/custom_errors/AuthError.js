const {
  ERROR_401,
} = require('../constants');

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_401;
  }
}

module.exports = {
  AuthError,
};
