import express from 'express';
import path from 'path';
import cors from 'cors'; // Import CORS

const app = express();
const port = process.env.PORT || 5001;

// Middleware to handle CORS
app.use(cors());

// Serve the API for courses (your database data)
app.get('/api/courses', async (req, res) => {
  try {
    // You should replace this with the actual query to your database
    // Example query to return courses data from your database
    const courses = await getCoursesFromDatabase();  // Replace this with real database call
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching courses');
  }
});

// Serve static files (React app)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any routes that aren’t API calls and serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

