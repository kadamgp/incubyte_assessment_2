export default function SweetCard({ sweet, onPurchase }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{sweet.name}</h5>
        <p className="card-text">{sweet.description}</p>
        <p className="fw-bold">₹{sweet.price}</p>
        <button
          className="btn btn-primary"
          disabled={sweet.quantity === 0}
          onClick={() => onPurchase(sweet.id)}
        >
          {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
        </button>
      </div>
    </div>
  );
}
