import React, { useState } from "react";
import api from "../api/apiClient";

export default function Login({ onLogin }: { onLogin: (token: string) => void }) {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLogin(res.data.token);
    } catch {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3>Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
