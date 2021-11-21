const dao = require('./profile-dao');
const express = require('express');
const app = express();

module.exports = (app) => {

    const findProfile = (req, res) =>
        dao.findProfile()
            .then(profile => res.json(profile[0]));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile[0]));

    app.get("/rest/profile/:id", findProfileById);
    app.put('/rest/profile/:id', updateProfile);
    app.get("/rest/profile", findProfile);

}