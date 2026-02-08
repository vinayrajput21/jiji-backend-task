export const validateQuery = (req, res, next) => {
  console.log("reached to validate")
  const { query } = req.body;

  if (!query || query.trim().length < 3) {
    return res.status(400).json({
      error: 'Query must be at least 3 characters'
    });
  }

  next();
};
