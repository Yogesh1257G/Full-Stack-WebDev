import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await res.json();

      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <h1>User Directory</h1>

      {users.map((user) => (
        <div
          style={{
            border: "2px dotted grey",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;