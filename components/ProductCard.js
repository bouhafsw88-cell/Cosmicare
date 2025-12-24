"use client";

export default function CheckoutForm({ total }) {
  return (
    <form className="form">
      <input type="text" placeholder="Nom & Prénom" required />
      <input type="tel" placeholder="Téléphone" required />

      <select required>
        <option value="">Choisir Wilaya</option>
        <option>Alger</option>
        <option>Oran</option>
        <option>Constantine</option>
        <option>Annaba</option>
      </select>

      <textarea placeholder="Adresse complète" required></textarea>

      <select required>
        <option>Paiement à la livraison</option>
        <option>Paiement CIB</option>
      </select>

      <button type="submit" className="btn">
        Commander – {total} DA
      </button>
    </form>
  );
}
