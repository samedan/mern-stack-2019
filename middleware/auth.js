const jwt = require("jsonwebtoken");
// const config = require("config");
const keys = require("../config/keys");

module.exports = function (
  req,
  res,
  next
) {
  // Get token from the header
  const token = req.header(
    "x-auth-token"
  );

  // Check if not token
  if (!token) {
    return res.status(401).json({
      msg:
        "No token, authorisation denied",
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(
      token,
      keys.jwtSecret
    );

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid",
    });
  }
};
