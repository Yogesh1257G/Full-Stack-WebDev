import { useState } from "react";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rahul Sharma",
      age: 20,
      course: "BCA",
      city: "Delhi",
    },
    {
      name: "Priya Verma",
      age: 21,
      course: "B.Tech",
      city: "Jaipur",
    },
    {
      name: "Amit Singh",
      age: 22,
      course: "MCA",
      city: "Lucknow",
    },
  ];

  const [student, setStudent] = useState(students[0]);

  return (
    <div className="App">
      <h1>Student Profile Viewer</h1>

      <div className="buttons">
        <button onClick={() => setStudent(students[0])}>Student 1</button>
        <button onClick={() => setStudent(students[1])}>Student 2</button>
        <button onClick={() => setStudent(students[2])}>Student 3</button>
      </div>

      <div className="card">
        <h2>{student.name}</h2>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>City:</strong> {student.city}</p>
      </div>
    </div>
  );
}

export default App;