const router = require("express").Router();
const userController = require("./userController.js");

router.post("/", userController.createController);
router.get("/", userController.findAllController);

module.exports = router;