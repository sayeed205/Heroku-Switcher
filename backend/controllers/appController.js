const App = require("../models/appModel");
const mongoose = require("mongoose");

// get all app
const getApps = async (req, res) => {
  const userID = req.user._id;

  try {
    const apps = await App.find({ userID }).sort({ createdAt: "ascending" });

    res.status(200).json(apps); //return all apps
  } catch (err) {
    res.status(404).json({ err: err.message }); //return error
  }
};

// get a single app
const getApp = async (req, res) => {
  const { id } = req.params; //get the id from the url
  const validId = mongoose.Types.ObjectId.isValid(id); //check if its a valid ID

  if (!validId) {
    return res.status(404).json({ err: "No such app" }); //if not return error
  }
  //   checkValidID();

  const app = await App.findById(id); //find the app by id

  if (!app) {
    return res.status(400).json({ err: "No such app" }); //if not return error
  }
  res.status(200).json(app); //return the app
};

// create new app
const createApp = async (req, res) => {
  const { appName, aHerokuApi, bHerokuApi } = req.body; //get the body of the request

  // add doc to DB
  try {
    const userID = req.user._id;
    const app = await App.create({ appName, aHerokuApi, bHerokuApi, userID }); //create a new app
    res.status(200).json(app); //return the app
  } catch (err) {
    res.status(404).json({ err: err.message }); //return error
  }
};

// delete an app
const deleteApp = async (req, res) => {
  const { id } = req.params; //get the id from the url
  const validId = mongoose.Types.ObjectId.isValid(id); //check if its a valid ID

  if (!validId) {
    return res.status(404).json({ err: "No such app" }); //if not return error
  }

  const app = await App.findOneAndDelete({ _id: id }); //find the app by id

  if (!app) {
    return res.status(400).json({ err: "No such app" }); //if not return error
  }

  res.status(200).json(app); //return the app
};

// update an app
const updateApp = async (req, res) => {
  const { id } = req.params; //get the id from the url
  const validId = mongoose.Types.ObjectId.isValid(id); //check if its a valid ID

  if (!validId) {
    return res.status(404).json({ err: "No such app" }); //if not return error
  }

  const app = await App.findOneAndUpdate({ _id: id }, { ...req.body }); //find the app by id and update it
  console.log(app);

  if (!app) {
    return res.status(400).json({ err: "No such app" });
  }

  res.status(200).json(app);
};

module.exports = {
  getApps,
  createApp,
  getApp,
  deleteApp,
  updateApp,
};
