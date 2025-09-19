import { useState } from "react";

export default function AdminPanel() {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", quantity: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addSweet = (e) => {
    e.preventDefault();
    setSweets([...sweets, { id: Date.now(), ...form }]);
    setForm({ name: "", description: "", price: "", quantity: "" });
  };

  return (
    <div className="container mt-4">
      <h3>Admin Panel</h3>
      <form className="mb-4" onSubmit={addSweet}>
        <input name="name" className="form-control mb-2" placeholder="Sweet Name" value={form.name} onChange={handleChange} />
        <input name="description" className="form-control mb-2" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" type="number" className="form-control mb-2" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="quantity" type="number" className="form-control mb-2" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
        <button className="btn btn-success">Add Sweet</button>
      </form>

      <h5>Manage Sweets</h5>
      <ul className="list-group">
        {sweets.map(s => (
          <li key={s.id} className="list-group-item d-flex justify-content-between">
            {s.name} - ₹{s.price} ({s.quantity})
            <button className="btn btn-sm btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
