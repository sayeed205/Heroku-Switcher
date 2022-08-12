const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}); //create a new schema

//static signup method
userSchema.statics.signup = async function (email, password) {
  //validate email and password
  if (!email || !password) {
    throw Error("Email and password are required"); //throw error if email or password is not provided
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is invalid"); //throw error if email is invalid
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough"); //throw error if password is not strong enough
  }

  const exists = await this.findOne({ email }); //find if user exists

  if (exists) {
    throw Error("Email alreay in use"); //throw an error if email already exists
  }

  const salt = await bcrypt.genSalt(10); //generate salt
  const hash = await bcrypt.hash(password, salt); //hash the password

  const user = await this.create({ email, password: hash }); //create a new user

  return user; //return the user
}; //end of signup method

//static login method
userSchema.statics.login = async function (email, password) {
  //validate email and password
  if (!email || !password) {
    throw Error("Email and password are required"); //throw error if email or password is not provided
  }

  const user = await this.findOne({ email }); //find if user exists

  if (!user) {
    throw Error("Incorrect email"); //throw an error if email does not exist
  }

  const isMatch = await bcrypt.compare(password, user.password); //compare the password with the hash

  if (!isMatch) {
    throw Error("Incorrect password"); //throw an error if password is incorrect
  }

  return user; //return the user
}; //end of login method

module.exports = mongoose.model("User", userSchema); //export the user model
