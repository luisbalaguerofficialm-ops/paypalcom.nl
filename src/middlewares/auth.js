import jwt from "jsonwebtoken";

export const protectAdmin = (req, res, next) => {
  try {
    let token;

    // ✅ 1. Check Authorization header (Postman)
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // ✅ 2. Fallback to cookies (browser)
    if (!token && req.cookies?.adminToken) {
      token = req.cookies.adminToken;
    }

    // ❌ No token found
    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
