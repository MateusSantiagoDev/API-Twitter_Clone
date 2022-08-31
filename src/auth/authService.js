const userModel = require("../users/userModel.js");
const jwt = require("jsonwebtoken");

const loginService = async (email) => await userModel.findOne({email: email});

const generateToken = (userId) => {
    return jwt.sign({id: userId}, process.env.SECRET, {expiresIn: "24h"});
}

module.exports = { loginService, generateToken };