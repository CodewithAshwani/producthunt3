const mongoose = require("mongoose");

const initDB = () => {
  mongoose
    .connect(process.env.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { initDB };
