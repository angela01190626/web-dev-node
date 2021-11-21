const dao = require('./who-dao');
const express = require('express');
const app = express();

module.exports = (app) => {

    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(who => res.json(who));

    app.get("/rest/who", findAllWho);

}