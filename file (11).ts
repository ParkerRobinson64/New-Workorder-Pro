import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/dotenv.js";
import { findUserByEmail, createUser } from "../repositories/userRepository.js";
import { User } from "../models/User.js";

export async function register(user: Omit<User, "user_id" | "password_hash">, password: string) {
  const hash = await bcrypt.hash(password, 10);
  return createUser({ ...user, password_hash: hash });
}

export async function login(email: string, password: string) {
  const found = await findUserByEmail(email);
  if (!found) throw new Error("User not found");
  const match = await bcrypt.compare(password, found.password_hash);
  if (!match) throw new Error("Invalid password");
  const token = jwt.sign({ id: found.user_id, role: found.role }, JWT_SECRET, { expiresIn: "8h" });
  return { token, user: found };
}
