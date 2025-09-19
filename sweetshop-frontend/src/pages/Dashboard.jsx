import { useState } from "react";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const sweets = [
    { id: 1, name: "Rasgulla", description: "Soft & spongy", price: 50, quantity: 10 },
    { id: 2, name: "Gulab Jamun", description: "Sweet & juicy", price: 40, quantity: 0 },
    { id: 3, name: "Kaju Katli", description: "Rich cashew sweet", price: 100, quantity: 5 }
  ];

  const filtered = sweets.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const handlePurchase = (id) => {
    alert(`Purchased sweet with ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Available Sweets</h2>
      <input
        className="form-control mb-3"
        placeholder="Search sweets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap gap-3">
        {filtered.map(sweet => (
          <SweetCard key={sweet.id} sweet={sweet} onPurchase={handlePurchase} />
        ))}
      </div>
    </div>
  );
}
