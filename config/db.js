

// config/db.js
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

module.exports = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'elearning',
  port: process.env.DB_PORT || 3306, // Example for MySQL
  // Add other database-specific options as needed
};