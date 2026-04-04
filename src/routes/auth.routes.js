import express from "express";
import { captureLogin } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", captureLogin);

export default router;
