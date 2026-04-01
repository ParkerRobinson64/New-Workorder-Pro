import { pool } from "../config/db.js";
import { User } from "../models/User.js";

export async function findUserByEmail(email: string): Promise<User | null> {
  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return res.rows[0] || null;
}

export async function createUser(u: User): Promise<User> {
  const res = await pool.query(
    "INSERT INTO users (name, email, password_hash, role) VALUES ($1,$2,$3,$4) RETURNING *",
    [u.name, u.email, u.password_hash, u.role]
  );
  return res.rows[0];
}
