
class GeneralError extends Error {
    constructor(message, err) {
      super();
      this.message = message;
      this.err = err
    }
  
    getCode() {
      if (this instanceof BadRequest) {
        return 400;
      } if (this instanceof NotFound) {
        return 404;
      } if (this instanceof BadDbRequest) {
        return 500;
      }
      return 500;
    }
  }
  
  class BadRequest extends GeneralError { }
  class NotFound extends GeneralError { }
  class BadDbRequest extends GeneralError { }
  
  module.exports = {
    GeneralError,
    BadRequest,
    NotFound,
    BadDbRequest
  };
  