// routes/admin.routes.js

import express from "express";
import {
  loginAdmin,
  registerAdmin,
  logoutAdmin,
  getAllCapturedUsers,
} from "../controllers/admin.controller.js";
import { protectAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/users", protectAdmin, getAllCapturedUsers);

export default router;
