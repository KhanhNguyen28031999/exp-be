const express = require("express");
const cors = require("cors");

const { connectToDB } = require("./src/utils/connectToDB");
const bookingRoute = require("./src/routes/bookingRoutes");
const bodyParser = require("body-parser");

const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/booking", bookingRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToDB();
});
