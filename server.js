import express from 'express'
import path from 'path'

const app = express()

// Serve static files from the 'dist' directory after building
app.use(express.static(path.resolve('dist')))

// Handle all other requests by sending index.html
app.all('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
