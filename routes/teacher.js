const express = require('express');
const router = express.Router();
const { checkRole } = require('../middleware/authMiddleware');
const { createCourse, uploadResource } = require('../controllers/courseController');

// Only teacher can create courses
router.post('/create-course', checkRole('teacher'), createCourse);

// Teacher and student can view courses
router.get('/view-courses', checkRole(['teacher', 'student']), (req, res) => {
    res.json({ status: 'success', message: 'Courses fetched successfully!' });
});

module.exports = router;
