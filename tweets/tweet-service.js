const dao = require('./tweet-dao');
const express = require('express');
const tweets = require("../data/tweets.json");
const app = express();

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const createTweet = (req, res) => {
        dao.createTweet({
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatarImage": "/images/react-blue.png",
            "logo-image": "/images/react-blue.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body})
            .then((insertedMovie) => res.json(insertedMovie));
    };

    const likeTweet = (req, res) => {
        if (req.body.liked === true) {
            req.body.liked = false;
            req.body.stats.likes--;
        } else {
            req.body.liked = true;
            req.body.stats.likes++;
        }
        dao.updateTweet(req.params.id, req.body)
            .then((status) => res.send(status));
    }

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets',createTweet);
    app.get("/rest/tweets", findAllTweets);

}