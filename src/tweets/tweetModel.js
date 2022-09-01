const mongoose = require("mongoose");
const { arrayBuffer } = require("stream/consumers");

const tweetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "userTwitter", required: true },
    message: { type: String, required: true },
    likes: { type: Array, required: true },
    comments: { type: Array, required: true },
    retweets: { type: Array, required: true },
});

const tweet = mongoose.model("tweet", tweetSchema);

module.exports = tweet;