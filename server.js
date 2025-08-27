const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


// Import routes
const adminRoutes = require('./routes/admin');
const teacherRoutes = require('./routes/teacher');
const studentRoutes = require('./routes/student');
const authRoutes = require('./routes/auth');

app.use('/api/admin', adminRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/auth', authRoutes);


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});