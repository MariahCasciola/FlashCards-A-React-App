const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// DONE: require routers and assign them to
const decksRouter = require("./decks/decks.router");
const cardsRouter = require("./cards/cards.router");

const app = express();

app.use(cors());
app.use(express.json());

// DONE: app.use("/card", cardsRouter)
app.use("/decks", decksRouter);
app.use("/cards", cardsRouter);

// DONE: not found handler
app.use(notFound);

// DONE: error handler
app.use(errorHandler);

module.exports = app;
