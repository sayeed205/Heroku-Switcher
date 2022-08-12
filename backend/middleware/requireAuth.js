const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // veryfy authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ err: "You must be logged in" }); // 401 is unauthorized
  }

  const token = authorization.split(" ")[1]; // get token from header
  console.log(token);

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET); // verify token
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: "User is not authorized" }); // 401 is unauthorized
  }
};
module.exports = requireAuth;
