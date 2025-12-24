"use client";

import ProductCard from "./components/ProductCard";
import CheckoutForm from "./components/CheckoutForm";

export default function Home() {
  const products = [
    { id: 1, name: "Sérum Luxe Or", price: 18500, category: "luxe" },
    { id: 2, name: "Crème Hydratante Quotidienne", price: 4200, category: "standard" },
    { id: 3, name: "Gel Nettoyant Visage", price: 3100, category: "standard" },
  ];

  const livraison = 600;
  const totalProduits = products.reduce((s, p) => s + p.price, 0);
  const total = totalProduits + livraison;

  return (
    <main className="container">
      <header className="hero">
        <h1>Cosmicare</h1>
        <p>Luxury Care, Timeless Beauty</p>
      </header>

      <section className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <section className="checkout">
        <h2>Finaliser la commande</h2>
        <p>Frais de livraison : <strong>{livraison} DA</strong></p>
        <p>Total : <strong>{total} DA</strong></p>
        <CheckoutForm total={total} />
      </section>
    </main>
  );
}
