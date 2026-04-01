import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import workOrderRoutes from "./routes/workOrderRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();
app.use(cors());
app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/workorders", workOrderRoutes);
app.use("/api/reports", reportRoutes);
app.use(errorMiddleware);

export default app;
