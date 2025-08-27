const express = require('express');
const router = express.Router();
const { checkRole } = require('../middleware/authMiddleware');
const { enrollCourse, submitAssignment } = require('../controllers/studentController');

// Only student can enroll
router.post('/enroll', checkRole('student'), enrollCourse);

// Student can view courses too
router.get('/view-courses', checkRole(['teacher', 'student']), (req, res) => {
    res.json({ status: 'success', message: 'Courses fetched successfully!' });
});

module.exports = router;
