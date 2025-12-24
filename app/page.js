import ProductCard from "../components/ProductCard";
import CheckoutForm from "../components/CheckoutForm";

const products = [
  {
    id: 1,
    name: "Crème Nivea Soft",
    price: 2900,
    badge: "BEST SELLER"
  },
  {
    id: 2,
    name: "Nivea Body Milk",
    price: 3200,
    badge: "NOUVEAU"
  }
];

export default function Home() {
  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <main className="container">
      <section className="hero">
        <h1>Cosmicare ✨</h1>
        <p>Boutique cosmétique pour elle</p>
      </section>

      <section className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="checkout">
        <h2>Finaliser la commande</h2>
        <CheckoutForm total={total} />
      </section>
    </main>
  );
}
