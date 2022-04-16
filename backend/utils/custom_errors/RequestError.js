const {
  ERROR_400,
} = require('../constants');

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_400;
  }
}

module.exports = {
  RequestError,
};
