const mongoose = require("mongoose");

const ConnectMongodb = async () => {
  try {
    await mongoose.connect(process.env.DB);
  } catch (err) {
    console.error("initial connection error: ", err);
  }

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error: "));
  db.once("open", console.log.bind(console, "Connected to database... "));
};

module.exports = ConnectMongodb;
