import pkg from "pg";
import { DATABASE_URL } from "./dotenv.js";

const { Pool } = pkg;
export const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL.includes("localhost") ? false : { rejectUnauthorized: false },
});

export async function testConnection() {
  try {
    await pool.query("SELECT NOW()");
    console.log("✅  Database connected");
  } catch (err) {
    console.error("❌  DB connection error", err);
    process.exit(1);
  }
}
