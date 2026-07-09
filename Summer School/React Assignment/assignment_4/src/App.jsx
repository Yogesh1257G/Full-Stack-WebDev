import { useState } from "react";
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" },
    { id: 4, name: "Neha" },
    { id: 5, name: "Karan" },
    { id: 6, name: "Sneha" },
    { id: 7, name: "Riya" },
    { id: 8, name: "Arjun" },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

//   const filteredStudents = students.filter((student) =>
//   student.name.toLowerCase().startsWith(search.toLowerCase())
// );

  return (
    <div className="container">
      <h1>Student Search Application</h1>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="student-list">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id}>
            {student.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;