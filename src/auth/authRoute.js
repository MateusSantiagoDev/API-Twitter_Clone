const route = require("express").Router();
const authController = require("./authController.js");

route.post("/login", authController.loginController);

module.exports = route;

