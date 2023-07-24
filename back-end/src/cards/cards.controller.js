const cardsService = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(cardExists), asyncErrorBoundary(read)],
};
