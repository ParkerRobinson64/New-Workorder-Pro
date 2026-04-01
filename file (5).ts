import { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: any, _: Request, res: Response, __: NextFunction) {
  console.error("Error:", err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
}
