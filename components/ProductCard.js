export default function ProductCard({ product }) {
  return (
    <div className="card card-luxe">
      {product.badge && <span className="badge">{product.badge}</span>}
      <h3>{product.name}</h3>
      <p><strong>{product.price} DA</strong></p>
      <button className="btn">Ajouter au panier</button>
    </div>
  );
}
