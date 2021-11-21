const model = require('./profile-model');

const findProfile = () => model.find();

const findProfileById = (id) =>
    model.findById(id);

const updateProfile = (id, profile) =>
    model.updateOne({_id: id},
        {$set: profile});

module.exports = {
    findProfile, findProfileById, updateProfile
}