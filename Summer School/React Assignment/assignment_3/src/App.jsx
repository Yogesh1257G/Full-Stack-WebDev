import "./App.css";

function App() {
  const employees = [
    {
      id: 1,
      name: "Rahul",
      department: "Development",
      salary: 50000,
    },
    {
      id: 2,
      name: "Priya",
      department: "HR",
      salary: 45000,
    },
    {
      id: 3,
      name: "Amit",
      department: "Marketing",
      salary: 40000,
    },
    {
      id: 4,
      name: "Sneha",
      department: "Finance",
      salary: 55000,
    },
    {
      id: 5,
      name: "Karan",
      department: "Testing",
      salary: 42000,
    },
    {
      id: 6,
      name: "Neha",
      department: "Design",
      salary: 47000,
    },
  ];

  return (
    <div className="container">
      <h1>Employee Card Generator</h1>

      <div className="card-container">
        {employees.map((employee) => (
          <div className="card" key={employee.id}>
            <h2>{employee.name}</h2>
            <p>
              <b>Department:</b> {employee.department}
            </p>
            <p>
              <b>Salary:</b> ₹{employee.salary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;