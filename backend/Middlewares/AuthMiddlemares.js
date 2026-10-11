const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const AuthMiddlewares = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log("JWT Error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { AuthMiddlewares };