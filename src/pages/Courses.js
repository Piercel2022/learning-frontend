import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    loadCourses();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Courses</h1>
      <ul className="mt-4 space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="p-4 border rounded bg-gray-100">
            <h2 className="text-xl">{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;