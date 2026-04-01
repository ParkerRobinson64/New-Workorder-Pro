import React, { useEffect, useState } from "react";
import api from "../api/apiClient";
import BarcodeScanner from "../components/BarcodeScanner";

export default function Inventory() {
  const [items, setItems] = useState<any[]>([]);
  const [scanMode, setScanMode] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await api.get("/inventory");
    setItems(res.data);
  }

  return (
    <div>
      <h3>Inventory</h3>
      <button className="btn btn-secondary mb-3" onClick={() => setScanMode(!scanMode)}>
        {scanMode ? "Stop Scanner" : "Scan Barcode"}
      </button>
      {scanMode && <BarcodeScanner onDetected={c => alert(`Scanned code: ${c}`)} />}
      <table className="table table-striped">
        <thead><tr><th>SKU</th><th>Description</th><th>Qty</th><th>Location</th></tr></thead>
        <tbody>
          {items.map(it => (
            <tr key={it.item_id}><td>{it.sku}</td><td>{it.description}</td><td>{it.quantity}</td><td>{it.location}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
