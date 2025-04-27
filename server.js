const express = require('express');
const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');
const bodyParse = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT=process.env.PORT;

const app = express();
app.use(bodyParse.json());
app.use(cors());
app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);

app.listen(PORT, function () {
    console.log("Server started...");
})
