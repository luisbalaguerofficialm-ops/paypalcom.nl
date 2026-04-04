// src/seed/seedUser.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // optional: clear existing users
    await User.deleteMany();

    // create user
    const user = await User.create({
      emailOrPhone: "test@gmail.com",
      password: "12345678", // will be hashed automatically
    });

    console.log("✅ User created:", user.emailOrPhone);

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    process.exit(1);
  }
};

seedUser();
