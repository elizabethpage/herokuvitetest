import { useEffect, useState } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')  // This will be proxied to your Heroku API
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
