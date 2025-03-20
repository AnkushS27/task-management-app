const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log error

  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  // Handle Mongoose CastError (invalid ObjectId)
  if (err.name === "CastError" && err.valueType === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  // Handle Mongoose ValidationError
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((val) => val.message);
  }

  // Handle Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;
