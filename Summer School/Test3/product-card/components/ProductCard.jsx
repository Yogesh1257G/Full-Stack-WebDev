function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "250px",
      }}
    >
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>

      <h3>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </h3>
    </div>
  );
}

export default ProductCard;