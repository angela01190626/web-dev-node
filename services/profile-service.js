let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile[0]);
    }

    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const newProfile = req.body;
        profile = {...newProfile};
        res.json(profile);
        // console.log('from server');
        res.sendStatus(200);
    }
    app.put('/api/profile', updateCurrentProfile);
}