import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <section className="products">
      <h1>Nos Produits</h1>

      <div className="product-grid">
        <ProductCard
          name="Crème Hydratante Visage"
          price="2900"
          image="https://via.placeholder.com/300"
        />

        <ProductCard
          name="Sérum Vitamine C"
          price="3500"
          image="https://via.placeholder.com/300"
        />

        <ProductCard
          name="Lait Corporel Nourrissant"
          price="4200"
          image="https://via.placeholder.com/300"
        />
      </div>
    </section>
  );
}
