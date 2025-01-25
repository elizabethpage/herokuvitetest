import express from 'express';
import cors from 'cors';  // Import CORS package
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001; // Heroku default port or local fallback

// Allow requests from localhost (you can be more specific with the origin if needed)
app.use(cors({
  origin: 'http://localhost:3000',  // Allow localhost:3000 to access the API
}));

// Sample API route
app.get('/api/courses', (req, res) => {
  res.json({
    courses: [
      { id: 1, name: 'React Basics' },
      { id: 2, name: 'Advanced JavaScript' },
      { id: 3, name: 'Node.js Fundamentals' },
    ],
  });
});

// Serve React build files (make sure your build folder is named 'dist' or adjust if needed)
app.use(express.static(path.join(__dirname, 'build')));

// Fallback route to serve index.html for React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});








