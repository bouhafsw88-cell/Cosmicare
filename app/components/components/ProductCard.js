export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price} DA</p>
      <button>Commander</button>
    </div>
  );
}
