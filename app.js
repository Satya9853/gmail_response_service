// packages Used
require("dotenv");
const express = require("express");

// getting the routes;
const mainRouter = require("./routes/main_route");

// creating the app
const app = express();

// using the routes
app.use("/gmail/service", mainRouter);

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, console.log(`App is running in port ${PORT}`));
};

start();
