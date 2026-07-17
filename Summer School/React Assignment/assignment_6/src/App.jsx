import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Component Loaded Successfully!");
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>React useEffect Assignment</h1>

      <div className="card">
        <h2>Counter</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>

      <div className="card">
        <h2>User List</h2>

        {users.map((user) => (
          <div key={user.id} className="user">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;