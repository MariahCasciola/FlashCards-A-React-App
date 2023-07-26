const router = require("express").Router();
const controller = require("./decks.controller");
const cardsRouter = require("../cards/cards.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:deckId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

  // mounts cards router on /:deckId/cards
router.use("/:deckId/cards", cardsRouter);

module.exports = router;
