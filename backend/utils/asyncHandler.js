/*
 * Async handler to wrap async functions to eliminate try-catch blocks
 * @param {Function} fn - Async function to be wrapped
 * @returns {Function} - Express middleware function
*/
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
