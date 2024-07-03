const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.REMOTE_DB_URL);
const db = mongoose.connection;

db.on("connected", function () {
    console.log("Database is connected...");
});

db.on("disconnected", function () {
    console.log("Database is disconnected...");
});

db.on("error", function () {
    console.log("Something went wrong...");
});