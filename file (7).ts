export interface InventoryItem {
  item_id?: number;
  sku: string;
  barcode: string;
  description: string;
  category: string;
  quantity: number;
  reorder_level: number;
  cost_per_unit: number;
  location: string;
  updated_at?: string;
}
