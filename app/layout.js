import "./globals.css";

export const metadata = {
  title: "Cosmicare",
  description: "Cosmetics & Luxury Beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
