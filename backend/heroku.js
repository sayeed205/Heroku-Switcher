const Heroku = require("heroku-client");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;

const main = async () => {
  // Use connect method to connect to the server

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch (error) {
    console.log(error);
  }

  const db = client.db(dbName);
  const collection = db.collection(process.env.COLLECTION_NAME);

  const apps = await collection.find({}).toArray();

  for (let app of apps) {
    const heroku1 = new Heroku({ token: app.aHerokuApi });
    const heroku2 = new Heroku({ token: app.bHerokuApi });
    const appName = app.appName;

    const date = new Date();
    const today = date.getDate();

    async function getAcc2() {
      //get info about second account
      const res = await heroku2.get("/account");
      return res;
    }
    async function getAcc1() {
      //get info about first account
      const res = await heroku1.get("/account");
      return res;
    }

    // ============================ error handling ==============================//
    const errHandler = async (err, msg) => {
      console.log(`\nGot some error while ${msg}

    Error code : ${err.statusCode}
    Error ID : ${err.body.id}
    Error message : ${err.body.message}

`);
    };

    // ============================ Add Collaborator optoins  ==============================//
    const addCollabOptions = (email) => {
      return {
        method: "POST",
        path: `/apps/${appName}/collaborators`,
        body: {
          user: email,
          silent: true,
        },
      };
    };

    // =============================== create transfer options ================================== //
    const transferOptions = (email) => {
      return {
        method: "POST",
        path: "/account/app-transfers",
        body: {
          app: appName,
          recipient: email,
          silent: true,
        },
      };
    };

    // ============================ accept Treansfer Options ================================== //
    const acceptTreansferOptions = () => {
      return {
        method: "PATCH",
        path: "/account/app-transfers/" + appName,
        body: {
          state: "accepted",
        },
      };
    };

    // ============================ Remove Collaborator optoins  ==============================//
    const removeCollabOptions = (email) => {
      return {
        method: "DELETE",
        path: `/apps/${appName}/collaborators/${email}`,
      };
    };

    // ============================  Add Collaborator ==============================//
    const addCollab = async (heroku, getAcc) => {
      getAcc().then((res) => {
        let email = res.email;
        heroku
          .request(addCollabOptions(email))
          .then((res) => {
            console.log(
              `\nAdded ${res.user.email} as collaborator to ${res.app.name} heroku app`
            );
          })
          .catch((err) => {
            const msg = "adding collaborator";
            errHandler(err, msg);
          });
      });
    };

    // ============================ Create Transfer ==============================//
    const createTransfer = async (heroku, getAcc) => {
      getAcc().then((res) => {
        let email = res.email;
        heroku
          .request(transferOptions(email))
          .then((res) => {
            console.log(
              `\nCreated transfer app to ${res.recipient.email} from ${res.owner.email}`
            );
          })
          .catch((err) => {
            const msg = "creating transfer of the app";
            errHandler(err, msg);
          });
      });
    };

    // ============================ Accept Transfer ==============================//
    const acceptTransfer = async (heroku) => {
      heroku
        .request(acceptTreansferOptions())
        .then((res) => {
          console.log(
            `\nAccepted transfer of the ${res.app.name} app from ${res.owner.email} by ${res.recipient.email}`
          );
        })
        .catch((err) => {
          const msg = `accepting transfer of the app.`;
          errHandler(err, msg);
        });
    };

    // ============================ Remove Collaborator ==============================//
    const removeCollab = async (heroku, getAcc) => {
      getAcc().then((res) => {
        let email = res.email;
        heroku
          .request(removeCollabOptions(email))
          .then((res) => {
            console.log(
              `\nRemoved ${res.user.email} as collaborator from ${res.app.name} heroku app`
            );
          })
          .catch((err) => {
            const msg = "removing collaborator";
            errHandler(err, msg);
            console.log(err);
          });
      });
    };

    if (today === 15) {
      addCollab(heroku1, getAcc2);

      setTimeout(() => {
        createTransfer(heroku1, getAcc2);
      }, 2000);

      setTimeout(() => {
        acceptTransfer(heroku2);
      }, 5000);

      setTimeout(() => {
        removeCollab(heroku2, getAcc1);
      }, 8000);

      console.log("transffering one app is done");
    } else if (today === 12) {
      addCollab(heroku2, getAcc1);

      setTimeout(() => {
        createTransfer(heroku2, getAcc1);
      }, 2000);

      setTimeout(() => {
        acceptTransfer(heroku1);
      }, 5000);

      setTimeout(() => {
        removeCollab(heroku1, getAcc2);
      }, 8000);

      console.log("transffering one app is done");
    } else {
      console.log(`today is ${today}th day don't have to transfer apps`);
    }
  }
};

main();
