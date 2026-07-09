import { useState } from "react";

function App() {
  const students = [
    { id: 1, name: "A", course: "React" },
    { id: 2, name: "B", course: "Java" },
    { id: 3, name: "C", course: "Python" },
    { id: 4, name: "D", course: "C++" },
    { id: 5, name: "E", course: "Node" },
    { id: 6, name: "F", course: "React" },
    { id: 7, name: "G", course: "Java" },
    { id: 8, name: "H", course: "Python" },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
          <div style={{
            border: "1px solid black",
            padding: "20px",
            width: "250px",
          }}
            key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>
        ))
      ) : (
        <h2>No Student Found</h2>
      )}
    </div>
  );
}

export default App;