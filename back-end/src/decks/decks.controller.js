const decksService = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const { _embed } = req.query;
  if (_embed) {
    const data = await decksService.listDecksWithEmbededCards();
    return res.json({ data });
  }
  const data = await decksService.list();
  return res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
