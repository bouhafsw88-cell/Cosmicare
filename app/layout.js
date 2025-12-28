import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Cosmicare",
  description: "Cosmétiques & soins beauté premium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>

        <footer className="footer">
          © 2025 Cosmicare – Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
