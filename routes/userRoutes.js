// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// @desc Register a new user
// @route POST /api/users/register
// @access Public
router.post('/register', registerUser);

// @desc Login a user
// @route POST /api/users/login
// @access Public
router.post('/login', loginUser);

// @desc Get user profile (for logged-in users)
// @route GET /api/users/profile
// @access Private (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;
