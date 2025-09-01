const express = require('express');
const router = express.Router();
const { checkRole } = require('../middleware/authMiddleware');
const { addUser } = require('../controllers/adminController');

// Only admins can add a user
router.post('/add-user', checkRole('admin'), addUser);

module.exports = router;
