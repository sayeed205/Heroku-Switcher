const express = require("express"); //import express
const router = express.Router(); //create a new router
const {
  getApps,
  getApp,
  createApp,
  deleteApp,
  updateApp,
} = require("../controllers/appController"); //import controller functions
const requireAuth = require("../middleware/requireAuth"); //import requireAuth middleware

router.use(requireAuth); // Authorization is required for all these routes bellow

router.get("/", getApps); //get all apps

router.get("/:id", getApp); //get a single app

router.post("/", createApp); //create a new app

router.delete("/:id", deleteApp); //delete an app

router.patch("/:id", updateApp); //update an app

module.exports = router;
