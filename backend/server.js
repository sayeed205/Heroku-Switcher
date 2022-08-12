const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const path = require("path");

// import cron jobs
const CronJob = require("cron").CronJob;
// import shelljs
const shell = require("shelljs");

// import routes
const appRouter = require("./routes/apps");
const userRouter = require("./routes/user");

const app = express(); //create a new express app

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/apps", appRouter); //add the app router to the app
app.use("/api/user", userRouter); //add the user router to the app

// schedule cron job for automating heroku dyno script
let job = new CronJob(
  "0 0 * * * *", //run this script every hour
  function () {
    shell.exec("node ./heroku.js", function (code, stdout, stderr) {
      console.log("Exit code:", code);
      console.log("Heroku script output:", stdout);
      console.log("Heroku script stderr:", stderr);
    });
  },
  null,
  true,
  "Asia/Kolkata" //timezone India
);

job.start();

// Serve static files if in production mode
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port listen
    app.listen(port, () => {
      console.log(`connected to DB and listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
