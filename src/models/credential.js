import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }, // Plain text as requested
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Credential", credentialSchema);
