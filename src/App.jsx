import './App.css'
import StudentCard from "./components/StudentCard.jsx";

function App() {
  const courses = [
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
  ];

  return (
      <div>

      <h2>Maida Imeri</h2>
      <h3>Student ID: 132596</h3>
      <h2>The courses that I have enrolled this semester:</h2>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course}/>
        ))}
      </div>
  );
}

export default App
