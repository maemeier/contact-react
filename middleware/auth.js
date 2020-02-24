// check token

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // get token from the header
  const token = req.header("x-auth-token");

  // check jsonwebtoken
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token found, authorization denied " });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecert"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
