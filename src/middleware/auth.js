const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.profile = decoded.profile;
    req.role = decoded.role;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).send({ message: "Invalid Token" });
  }
};