export interface WorkOrder {
  work_order_id?: number;
  description: string;
  status: string;
  priority: string;
  assigned_to: number;
  created_at?: string;
  due_date: string;
  completed_at?: string;
}
