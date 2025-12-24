export default function ProductCard({ product }) {
  return (
    <div className={`card ${product.category}`}>
      <h3>{product.name}</h3>
      <strong>{product.price} DA</strong>
      {product.category === "luxe" && (
        <span className="badge">LUXE</span>
      )}
    </div>
  );
}
