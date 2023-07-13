const decksService = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await decksService.list()
    res.json({data})
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
