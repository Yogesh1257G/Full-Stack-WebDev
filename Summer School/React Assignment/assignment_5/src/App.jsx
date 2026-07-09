import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1>React useState Assignment</h1>

        {/* Counter */}
        <div className="card">
          <h2>Counter App</h2>
          <h1>{count}</h1>

          <div className="buttons">
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        {/* Name Display */}
        <div className="card">
          <h2>Name Display</h2>

          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h3>Hello, {name || "Guest"}!</h3>
        </div>

        {/* Show / Hide */}
        <div className="card">
          <h2>Show / Hide Paragraph</h2>

          <button onClick={() => setShowText(!showText)}>
            {showText ? "Hide" : "Show"}
          </button>

          {showText && (
            <p>
              React is a JavaScript library for building user interfaces.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;