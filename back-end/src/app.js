const express = require("express");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// TODO: require routers and assign them to
const decksRouter = require("./decks/decks.router");
// const cardsRouter = require("./cards/cards.router");

const app = express();

// TODO: app.use("/card", cardsRouter)
app.use("/decks", decksRouter);
// app.use("/cards", cardsRouter);

// DONE: not found handler
app.use(notFound);

// DONE: error handler
app.use(errorHandler);

module.exports = app;
