const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("TOKEN:", token);
  console.log("DECODED:", jwt.decode(token));

  if (!token)
    return res.status(401).json({ success: false, message: "No token" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ success: false, message: "Invalid token" });
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authToken;
