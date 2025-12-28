import "./globals.css";

export const metadata = {
  title: "Cosmicare",
  description: "Cosmétiques & soins beauté premium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <h1 className="logo">Cosmicare</h1>
        </header>

        <main>{children}</main>

        <footer className="footer">
          © 2025 Cosmicare – Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
