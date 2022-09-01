const userModel = require("./userModel.js");

const findByEmailService = async (email) => await userModel.findOne({email: email});

const createService = async (body) => await userModel.create(body);

const findAllService = async () => await userModel.find(); 

const findByIdUserservice = async (userId) => userModel.findById(userId);

module.exports = {findByEmailService, createService, findAllService, findByIdUserservice};