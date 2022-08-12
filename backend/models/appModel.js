const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create a new schema
const appSchema = new Schema(
  {
    //name of the heroku app
    appName: {
      type: String,
      required: true,
    },
    //heroku api key for first account
    aHerokuApi: {
      type: String,
      required: true,
    },
    //heroku api key for second account
    bHerokuApi: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("App", appSchema);
