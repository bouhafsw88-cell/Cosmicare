import "./globals.css";

export const metadata = {
  title: "Cosmicare – Cosmétique & Soins en Algérie",
  description:
    "Cosmicare.dz – Produits cosmétiques luxe et standards avec paiement CIB et paiement à la livraison",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
