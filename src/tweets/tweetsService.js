const tweet = require("./tweetModel.js");

const createTweetService = (message, userId) => {
       return tweet.create({ message, user: userId });
};

module.exports = { createTweetService };