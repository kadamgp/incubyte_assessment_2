export default function Register() {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3>Create Account</h3>
      <form>
        <input type="text" className="form-control mb-2" placeholder="Username" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-danger w-100">Register</button>
      </form>
    </div>
  );
}
