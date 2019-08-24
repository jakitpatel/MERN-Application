const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 4000;

const db = require("./db");
const movieRouter = require("./routes/movie-router");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => {
  return console.log(`Server running on port ${apiPort}`);
});
