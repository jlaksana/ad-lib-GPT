const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World from UML2Code API!");
});

app.listen(5000, () => {
  console.log(`Api running at http://localhost:5000`);
});
