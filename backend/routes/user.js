const express = require("express");

//import controller functions
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router(); //create a new router

//login route
router.post("/login", loginUser); //login user

//signup route
router.post("/signup", signupUser); //signup user

module.exports = router;
