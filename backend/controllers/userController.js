const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" }); //create a token
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body; //get the body of the request

  try {
    const user = await User.login(email, password); //login the user and get the user
    const token = createToken(user._id); //create a token for the user
    res.status(200).json({ email, token }); //return the user and token
  } catch (err) {
    res.status(404).json({ err: err.message }); //return error message
  }
};

//sigup user
const signupUser = async (req, res) => {
  const { email, password } = req.body; //get the body of the request

  try {
    const user = await User.signup(email, password); //create a new user
    const token = createToken(user._id); //create a token for the user
    res.status(200).json({ email, token }); //return the user and token
  } catch (err) {
    res.status(404).json({ err: err.message }); //return error message
  }
}; //end of signupUser

module.exports = { loginUser, signupUser };
