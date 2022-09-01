const tweetService = require("./tweetsService.js");

const createTweetController = async (req, res) => {
    try{
        const { message } = req.body;
        if(!message){
            res.status(400).send({ message: "Envie todos os dados necessários para a criação do tweet "});
        }

        const { id } = await tweetService.createTweetService(message, req.userId);

        return res.send({
            message: "tweet criado com sucesso", tweet: { id, message }
        });

    } catch (err) {
       return  res.status(500).send({ message: err.message });
    }

};

const findAllTweetController = async (_, res) => {
    try{
        const tweets = await tweetService.findAllTweetService();
        if(tweets.length === 0){
            return res.status(400).send({ message: "Não existe tweets" });
        }
        return res.status(200).send({
            results: tweets.map(tweet => ({
                id: tweet._id,
                message: tweet.message,
                likes: tweet.likes.length,
                comments: tweet.comments.length,
                retweets: tweet.retweets.length,               
            }))
        });
    } catch (err) {
        return  res.status(500).send({ message: err.message });
    }

};

module.exports = { createTweetController, findAllTweetController };