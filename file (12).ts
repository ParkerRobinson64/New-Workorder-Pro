import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function register(req: Request, res: Response) {
  const { name, email, password, role } = req.body;
  const user = await authService.register({ name, email, role, password_hash: "" }, password);
  res.json(user);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const session = await authService.login(email, password);
  res.json(session);
}
