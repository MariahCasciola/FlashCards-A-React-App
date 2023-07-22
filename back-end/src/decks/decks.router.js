const router = require("express").Router();
const controller = require("./decks.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:deckId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
