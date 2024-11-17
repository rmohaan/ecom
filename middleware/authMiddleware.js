const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // Check if token exists in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from the header (the token will be in the format "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // Decode token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Add the decoded user info to the request object
      req.user = decoded;

      next(); // Call the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
