const mongoose = require('mongoose');
const schema = mongoose.Schema({
    avatarIcon: String,
    userName: String,
    handle: String
}, {collection: "who", versionKey: false});
module.exports = schema;
