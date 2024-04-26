const express = require("express");
require("dotenv").config();

const bodyParser = require('body-parser');

const connectToMongoDB = require("./config/database");
const config = require("./config/config");


const userRouter = require("./routes/user");

const app = express();

connectToMongoDB();


app.use(bodyParser.json());


app.use("/users", userRouter);

const port = config.get('port');
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);