const mongoose = require("mongoose");
const { arrayBuffer } = require("stream/consumers");

const tweetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: userTwitter, required: true },
    message: { type: String, required: true },
    likes: { type: array, required: true },
    comment: { type: array, required: true },
    retweet: { type: array, required: true },
});

const tweet = mongoose.model("tweet", tweetSchema);

module.exports = tweet;