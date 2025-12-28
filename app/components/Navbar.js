import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Cosmicare</div>

      <ul className="nav-links">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/visage">Visage</Link></li>
        <li><Link href="/corps">Corps</Link></li>
        <li><Link href="/cheveux">Cheveux</Link></li>
        <li><Link href="/promo">Promo</Link></li>
      </ul>
    </nav>
  );
}
