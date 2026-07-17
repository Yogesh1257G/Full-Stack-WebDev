import { useState } from "react";
const p = [
  { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics" },
  { id: 2, name: "Notebook", price: 120, category: "Stationery" },
  { id: 3, name: "Water Bottle", price: 450, category: "Accessories" },
  { id: 4, name: "Keyboard", price: 1500, category: "Electronics" },
];
export default function App() {
  const [c, setC] = useState([]),
    [f, setF] = useState("All");
  const add = (i) =>
    setC((v) => {
      const e = v.find((x) => x.id === i.id);
      return e
        ? v.map((x) => (x.id === i.id ? { ...x, qty: x.qty + 1 } : x))
        : [...v, { ...i, qty: 1 }];
    });
  const upd = (id, d) =>
    setC((v) =>
      v.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty + d) } : x)),
    );
  const rm = (id) => setC((v) => v.filter((x) => x.id !== id));
  const list = p.filter((x) => f === "All" || x.category === f);
  const items = c.reduce((a, b) => a + b.qty, 0),
    price = c.reduce((a, b) => a + b.qty * b.price, 0);
  return (
    <div>
      <h2>Products</h2>
      {["All", "Electronics", "Stationery", "Accessories"].map((x) => (
        <button key={x} onClick={() => setF(x)}>
          {x}
        </button>
      ))}
      {list.map((x) => (
        <div key={x.id}>
          {x.name} ₹{x.price}
          <button onClick={() => add(x)}>Add</button>
        </div>
      ))}
      <h3>Cart</h3>
      <p>
        Total Items:{items} Total Price:₹{price}
      </p>
      {c.map((x) => (
        <div key={x.id}>
          {x.name} {x.qty}
          <button onClick={() => upd(x.id, 1)}>+</button>
          <button onClick={() => upd(x.id, -1)}>-</button>
          <button onClick={() => rm(x.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
