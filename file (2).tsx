import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props { onLogout: () => void; }

export default function Navbar({ onLogout }: Props) {
  const navigate = useNavigate();
  const handleLogout = () => { onLogout(); navigate("/login"); };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WorkOrderPro</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/inventory">Inventory</Link>
          <Link className="btn btn-outline-light me-2" to="/workorders">Work Orders</Link>
          <Link className="btn btn-outline-light me-2" to="/reports">Reports</Link>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}
