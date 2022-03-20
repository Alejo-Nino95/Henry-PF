require("dotenv").config();
const jwt = require("jsonwebtoken");

let checkReset = (req, res, next) => {
  let token = req.get("token");
  console.log(token);
  jwt.verify(token, process.env.PASSWORD_RESET_TOKEN, (err, decoded) => {
    if (err) {
      let notify = {
        message:
          "Se ha vencido el enlace, vuelva a solicitar uno nuevo por favor",
        options: {
          keepOnHover: true,
          type: "error",
          icon: "exclamation-circle",
          duration: 4000,
        },
      };
      return res.status(401).json(notify);
    }

    req.decoded = decoded;

    next();
  });
};

module.exports = { checkReset };
