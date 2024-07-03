const express = require('express');
const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');
const bodyParse = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParse.json());
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}));
app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);

app.listen(process.env.PORT, function () {
    console.log("Server started...");
})