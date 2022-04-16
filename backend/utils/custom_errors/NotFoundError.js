const {
  ERROR_404,
} = require('../constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_404;
  }
}

module.exports = {
  NotFoundError,
};
