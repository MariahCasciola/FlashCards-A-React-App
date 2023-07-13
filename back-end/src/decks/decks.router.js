const router = require("express").Router();
const controller = require("./decks.controller");
const methodNotAlowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAlowed);

module.exports = router;
