import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Abc", marks: 78 },
    { id: 2, name: "Def", marks: 32 },
    { id: 3, name: "Ghi", marks: 65 },
    { id: 4, name: "Jkl", marks: 28 },
  ];

  return (
    <div>
      <h1>Student Result</h1>

      {students.map((student) => (
        <div style={{
          border: "1px solid black",
          padding: "20px",
          width: "250px",
        }}>
          <h3>{student.name}</h3>
          <p>Marks: {student.marks}</p>

          <p>
            {student.marks >= 40 ? "Pass" : "Fail"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;