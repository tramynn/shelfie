require("dotenv").config();
const express = require("express");
// const massive = require("massive");
const app = express();

// const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

const SERVER_PORT = 5252;
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
