export default function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3>Login</h3>
      <form>
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
