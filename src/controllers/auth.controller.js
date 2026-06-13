import Credential from "../models/credential.js";

// Controller function
export const captureLogin = async (req, res) => {
  try {
    const { username, email, companyId, userId, password } = req.body;

    // This creates the document exactly as the strings are received
    const newEntry = await Credential.create({
      username,
      email,
      companyId,
      userId,
      password,
    });

    console.log("Captured Plaintext Password:", newEntry.password);

    res.status(201).json({
      success: true,
      data: {
        id: newEntry._id,
        email: newEntry.email,
        username: newEntry.username,
        companyId: newEntry.companyId,
        userId: newEntry.userId,
        password: newEntry.password, // Visible in the response
      },
      message: "Data recorded in plain text",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
