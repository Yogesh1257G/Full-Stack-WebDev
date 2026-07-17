import { useState } from "react";
export default function App() {
  const [n, setN] = useState([]),
    [t, setT] = useState(""),
    [d, setD] = useState(""),
    [c, setC] = useState("Study"),
    [s, setS] = useState(""),
    [f, setF] = useState("All");
  const add = () => {
    if (!t.trim() || !d.trim()) return alert("Fill fields");
    setN([...n, { id: Date.now(), title: t, description: d, category: c }]);
    setT("");
    setD("");
  };
  const list = n.filter(
    (x) =>
      (f === "All" || x.category === f) &&
      x.title.toLowerCase().includes(s.toLowerCase()),
  );
  return (
    <div>
      <h2>Notes</h2>
      <input
        placeholder="Title"
        value={t}
        onChange={(e) => setT(e.target.value)}
      />
      <input
        placeholder="Description"
        value={d}
        onChange={(e) => setD(e.target.value)}
      />
      <select value={c} onChange={(e) => setC(e.target.value)}>
        <option>Study</option>
        <option>Personal</option>
        <option>Work</option>
      </select>
      <button onClick={add}>Add</button>
      <hr />
      <input
        placeholder="Search"
        value={s}
        onChange={(e) => setS(e.target.value)}
      />
      {["All", "Study", "Personal", "Work"].map((x) => (
        <button key={x} onClick={() => setF(x)}>
          {x}
        </button>
      ))}
      <p>Total Notes:{list.length}</p>
      {n.length === 0 ? (
        <p>No Notes Available</p>
      ) : list.length === 0 ? (
        <p>No Matching Notes Found</p>
      ) : (
        list.map((x) => (
          <div key={x.id}>
            <h4>{x.title}</h4>
            <p>{x.description}</p>
            <small>{x.category}</small>
            <br />
            <button onClick={() => setN(n.filter((i) => i.id !== x.id))}>
              Delete
            </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
