/** @format */

const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(5000, (err) => {
  err ? console.log(err) : console.log("server is running on port 5000");
});

