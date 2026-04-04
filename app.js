import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

import userAuthRoutes from "./src/routes/auth.routes.js";
import adminRoutes from "./src/routes/admin.routes.js";

app.use("/api/auth", userAuthRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const port = process.env.PORT || 4000;

// ===== Connect to MongoDB & Start Server =====
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(" Database connected successfully");

    // FIX: define server BEFORE using it
    const server = app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
    process.exit(1);
  }
};

start();

export default app;
