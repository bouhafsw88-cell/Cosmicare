export default function ProductCard({ name, price, image }) {

  const whatsappNumber = "213669980126"; // ⚠️ remplace par ton numéro

  const message = `Bonjour, je souhaite commander le produit :
- ${name}
- Prix : ${price} DA`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price} DA</p>

      <a href={whatsappLink} target="_blank">
        <button>Commander via WhatsApp</button>
      </a>
    </div>
  );
}
