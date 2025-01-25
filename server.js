import express from 'express';
import path from 'path';  // Import path module
import cors from 'cors';  // Import CORS package

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from localhost (you can be more specific with the origin if needed)
app.use(cors({
  origin: 'http://localhost:3000',  // Allow localhost:3000 to access the API
}));

// Serve React build files
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback route to serve index.html for React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






