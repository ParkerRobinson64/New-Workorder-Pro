import React, { useEffect, useState } from "react";
import api from "../api/apiClient";

interface Summary { workOrders: number; lowStock: number; }

export default function Dashboard() {
  const [summary, setSummary] = useState<Summary>({ workOrders: 0, lowStock: 0 });

  useEffect(() => {
    async function load() {
      try {
        const wo = await api.get("/workorders");
        const inv = await api.get("/inventory");
        const low = inv.data.filter((i: any) => i.quantity < i.reorder_level).length;
        setSummary({ workOrders: wo.data.length, lowStock: low });
      } catch (e) { console.error(e); }
    }
    load();
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center p-3 bg-light">
            <h4>{summary.workOrders}</h4>
            <p>Active Work Orders</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center p-3 bg-light">
            <h4>{summary.lowStock}</h4>
            <p>Items Low in Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}
