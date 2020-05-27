const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    collections: { type: Array},
    date: { type: String, required: true }
})

module.exports = User = mongoose.model('user', UserSchema);