import React, { useEffect, useState } from 'react';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState(null);      // For error handling

  useEffect(() => {
    // Use environment variable to switch between localhost and Heroku
    const apiUrl = import.meta.env.VITE_APP_API_URL || '/api/courses'; // Proxy to backend

    console.log('API URL:', apiUrl);

    // Fetch courses from the backend
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);  // Update loading state when data is received
      })
      .catch((error) => {
        setError(error.message);  // Handle error
        setLoading(false);        // Set loading to false when there's an error
      });
  }, []);

  // Render loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.course_id}>{course.course_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


