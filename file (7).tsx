import React, { useEffect, useState } from "react";
import api from "../api/apiClient";

export default function WorkOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [description, setDescription] = useState("");

  async function load() {
    const res = await api.get("/workorders");
    setOrders(res.data);
  }

  async function create() {
    await api.post("/workorders", { description, priority: "Medium", assigned_to: 1, due_date: new Date().toISOString() });
    setDescription(""); load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h3>Work Orders</h3>
      <div className="input-group mb-3">
        <input className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="New work order description" />
        <button className="btn btn-primary" onClick={create}>Create</button>
      </div>
      <ul className="list-group">
        {orders.map(o => <li key={o.work_order_id} className="list-group-item">{o.description} – {o.status}</li>)}
      </ul>
    </div>
  );
}
