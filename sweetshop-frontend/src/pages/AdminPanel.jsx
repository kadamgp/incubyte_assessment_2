import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", quantity: "" });

  const API_URL = "http://127.0.0.1:8000/api/sweets/"; // Django API endpoint

  // Fetch all sweets from backend on load
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setSweets(res.data))
      .catch(err => console.error("Error fetching sweets:", err));
  }, []);

  // Handle form input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });





  // Add sweet to backend
  const addSweet = (e) => {
    e.preventDefault();
    axios.post(API_URL, {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      quantity:parseFloat(form.quantity)
    })
    .then(res => {
      setSweets([...sweets, res.data]); // Add new sweet to state
      setForm({ name: "", description: "", price: "", quantity: "" });
    })
.catch(err => console.error("Error adding sweet:", err.response ? err.response.data : err));
  };

  // Delete sweet from backend
  const deleteSweet = (id) => {
    axios.delete(`${API_URL}${id}/`)
      .then(() => {
        setSweets(sweets.filter(s => s.id !== id));
      })
      .catch(err => console.error("Error deleting sweet:", err));
  };

  return (
    <div className="container mt-4">
      <h3>Admin Panel</h3>

      <form className="mb-4" onSubmit={addSweet}>
        <input name="name" className="form-control mb-2" placeholder="Sweet Name" value={form.name} onChange={handleChange} />
        <input name="description" className="form-control mb-2" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" type="number" className="form-control mb-2" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="quantity" type="number" className="form-control mb-2" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
        <button type="submit" className="btn btn-success">Add Sweet</button>
      </form>

      <h5>Manage Sweets</h5>
      <ul className="list-group">
        {sweets.map(s => (
          <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
            {s.name} - ₹{s.price} ({s.quantity})
            <button className="btn btn-sm btn-danger" onClick={() => deleteSweet(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
