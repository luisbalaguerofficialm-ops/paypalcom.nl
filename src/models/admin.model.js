// models/admin.model.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
      type: String,
      enums: ["admin", "user", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Admin", adminSchema);
