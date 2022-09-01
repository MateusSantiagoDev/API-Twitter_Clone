const tweet = require("./tweetModel.js");

const createTweetService = (message, userId) => {
       return tweet.create({ message, user: userId });
};

const findAllTweetService = () => tweet.find().sort({ _id: -1 })//.populate("userTwitter"); 

module.exports = { createTweetService, findAllTweetService };