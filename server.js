import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// API route to handle courses (example)
app.get('/api/courses', (req, res) => {
  res.json([
    { course_id: 1, course_name: 'Intro to Programming' },
    { course_id: 2, course_name: 'Data Structures' },
    // Add your actual courses data here
  ]);
});

// Serve your app at the root
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


