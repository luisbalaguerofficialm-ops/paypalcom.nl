import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: null,
    },

    email: {
      type: String,
      default: null,
    },

    companyId: {
      type: String,
      default: null,
    },

    userId: {
      type: String,
      default: null,
    },

    password: {
      type: String,
      default: null, // Plain text as requested
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Credential", credentialSchema);
