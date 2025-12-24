import "./globals.css";

export const metadata = {
  title: "Cosmicare",
  description: "Boutique de cosmétiques",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
