const { GeneralError } = require("./errorUtil");

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
      err: err.err
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}



// async/await error catcher
const catchAsyncErrors = fn => (
    (req, res, next) => {
        const routePromise = fn(req, res, next);
        if (routePromise.catch) {
            routePromise.catch(err => next(err));
        }
    }
);
    
module.exports = {
    handleErrors,
    catchAsyncErrors
}
