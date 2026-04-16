import './App.css'
import StudentCard from "./components/StudentCard.jsx";
import {useState} from "react";
import RegisterCourse from "./components/RegisterCourse.jsx";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 123,
      name: "Operating System",
      credits: 6,
      grade: 80,
      attending: true,
      difficulty: "Moderate",
    },
    {
      id: 456,
      name: "Client-Side Programming",
      credits: 6,
      grade: 90,
      attending: true,
      difficulty: "Hard",
    },
    {
      id: 789,
      name: "Applied Probability and Statistics",
      credits: 6,
      grade: 100,
      attending: false,
      difficulty: "Easy",
    },
  ]);

  const handleRegister = (newCourse) => {
    const courseToAdd = {
      id: courses.length + 1,
      name: newCourse.name,
      credits: newCourse.credits,
      grade: newCourse.grade * 10,
      attending: newCourse.attending,
      difficulty: newCourse.difficulty,
    };

    setCourses([...courses, courseToAdd]);
  };

  return (
      <div>

      <h2>Maida Imeri</h2>
      <h3>Student ID: 132596</h3>
      <h2>The courses that I have enrolled this semester:</h2>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course}/>
        ))}

        <h2>Register a new course!</h2>
        <RegisterCourse onRegister={handleRegister} />
      </div>
  );
}

export default App
