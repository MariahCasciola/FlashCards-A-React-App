const express = require("express");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// TODO: require routers and assign them to
const decksRouter = require("");
const cardsRouter = require("");

const app = express();

// TODO: app.use("/", router)

// DONE: not found handler
app.use(notFound);

// DONE: error handler
app.use(errorHandler);

module.exports = app;
