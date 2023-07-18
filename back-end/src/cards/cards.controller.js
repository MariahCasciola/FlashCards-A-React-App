const cardsService = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const data = await cardsService.list();
  res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
