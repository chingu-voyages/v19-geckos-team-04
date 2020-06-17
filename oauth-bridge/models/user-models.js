const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    spotifyID: String,
    email: String,
    accessToken: String,
    playlist: Array,
})

const User = mongoose.model('user', userSchema);

module.exports = User;