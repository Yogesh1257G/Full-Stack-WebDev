import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>

      <div className="buttons">
        <button className="red" onClick={() => setBgColor("red")}>
          Red
        </button>

        <button className="green" onClick={() => setBgColor("green")}>
          Green
        </button>

        <button className="blue" onClick={() => setBgColor("blue")}>
          Blue
        </button>

        <button className="yellow" onClick={() => setBgColor("yellow")}>
          Yellow
        </button>

        <button className="white" onClick={() => setBgColor("white")}>
          White (Reset)
        </button>
      </div>
    </div>
  );
}

export default App;