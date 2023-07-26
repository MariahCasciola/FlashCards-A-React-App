const cardsService = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");

async function cardExists(req, res, next) {
  const card = await cardsService.read(req.params.card_id);
  if (card) {
    res.locals.card = card;
    return next();
  }
  next({ status: 404, message: `${req.params.card} does not exist` });
}

async function list(req, res, next) {
  const data = await cardsService.list();
  res.json({ data });
}

async function read(req, res, next) {
  const data = res.locals.card;
  return res.json({ data });
}

async function create(req, res, next) {
  const newCard = { ...req.body.data, deckId: req.params.deckId };
  const data = await cardsService.create(newCard);
  res.status(201).json({ data });
}

// properities a card body must have
const validProperties = ["front", "back"];

async function update(req, res, next) {
  const card = res.locals.card;
  const updatedCard = {
    ...card,
    ...req.body.data,
    updated_at: new Date(Date.now()).toISOString(),
  };
  const data = await cardsService.update(updatedCard);
  res.json({ data });
}

async function destroy(req, res, next) {
  const { card } = res.locals;
  await cardsService.destroy(card.card_id);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(cardExists), asyncErrorBoundary(read)],
  create: [hasProperties(...validProperties), asyncErrorBoundary(create)],
  update: [
    asyncErrorBoundary(cardExists),
    hasProperties(...validProperties),
    asyncErrorBoundary(update),
  ],
  destroy: [asyncErrorBoundary(cardExists), asyncErrorBoundary(destroy)],
};
