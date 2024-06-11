const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employee-api");
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