const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


const storyEndpoint = require("./storyRoutes.js");



app.use("/story", storyEndpoint);


app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(5005, () => {
  console.log(`Api running at http://localhost:5000`);
  

});
