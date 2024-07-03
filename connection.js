const mongoose = require("mongoose");

async function connectionToDb() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/url_shortner")
    .then(() => console.log("The connection has been established"))
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectionToDb };
