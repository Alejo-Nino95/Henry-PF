require("dotenv").config();
const jwt = require("jsonwebtoken");

let checkUser = (req, res, next) => {
  let token = req.get("jwt");
  jwt.verify(token, process.env.USER_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        data: err,
      });
    }
    req.userData = decoded.userData;
    next();
  });
};

module.exports = { checkUser };
