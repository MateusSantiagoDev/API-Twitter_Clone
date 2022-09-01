const router = require("express").Router();
const tweetController = require("./tweetsController.js");
const authMiddleware = require("../auth/authMiddleware.js");

router.post("/", authMiddleware, tweetController.createTweetController);

module.exports = router;