import ProductCard from "../components/ProductCard";

function App() {
  const product = {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    inStock: true,
  };

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}

export default App;