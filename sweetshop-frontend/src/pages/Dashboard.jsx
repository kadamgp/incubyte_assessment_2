import { useState, useEffect } from "react";
import SweetCard from "../components/SweetCard";
import axios from "axios";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sweets/")
      .then(res => setSweets(res.data))
      .catch(err => console.error(err));
  }, []);

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
