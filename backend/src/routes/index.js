import express from "express";
import authRoutes from "./auth.route.js";
//Entry point of our routes
const router = express.Router();

router.use("/auth", authRoutes);
export default router;
