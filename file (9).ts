export interface WorkOrderPart {
  id?: number;
  work_order_id: number;
  item_id: number;
  quantity_used: number;
  scanned_by: number;
  scanned_at?: string;
}
