import ErrorHandler from "../utils/errorHandler";

const middleware = (err, req, res, next) => {
    console.log(err)
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  err.message = err.message;

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default middleware