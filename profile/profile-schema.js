const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: {type: Date, defaultValue: Date.now},
    dateJoined: String,
    followingCount: String,
    followersCount: String

}, {collection: "profile", versionKey: false});
module.exports = schema;