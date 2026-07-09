import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Headphones", price: 2000, quantity: 1 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  ]);

  const increase = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  let total = 0;

  products.forEach((product) => {
    total += product.price * product.quantity;
  });

  return (
    <div>
      <h1>Shopping Cart</h1>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => decrease(item.id)}>
            -
          </button>

          <span> {item.quantity} </span>

          <button onClick={() => increase(item.id)}>
            +
          </button>
        </div>
      ))}

      <h2>Total Price: ₹{total}</h2>
    </div>
  );
}

export default App;