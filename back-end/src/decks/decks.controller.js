const decksService = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function deckExists(req, res, next) {
  const deck = await decksService.read(req.params.deckId);
  if (deck) {
    res.locals.deck = deck;
    return next();
  }
  next({ status: 404, message: `${req.params.reservation} does not exist` });
}

async function list(req, res, next) {
  const { _embed } = req.query;
  if (_embed) {
    const data = await decksService.listDecksWithEmbededCards();
    return res.json({ data });
  }
  const data = await decksService.list();
  return res.json({ data });
}

async function read(req, res, next) {
  const { _embed } = req.query;
  if (_embed) {
    const data = await decksService.readDeckWithEmbededCards(req.params.deckId);
    return res.json({ data });
  }
  const data = res.locals.deck;
  return res.json({ data });
}

async function create(req, res, next) {
  const data = await decksService.create(req.body.data);
  res.status(201).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(deckExists), asyncErrorBoundary(read)],
  create: [asyncErrorBoundary(create)],
};
