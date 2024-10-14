// models/users.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // username is required
        unique: true,   // username must be unique
    },
    email: {
        type: String,
        required: true, // email is required
        unique: true,   // email must be unique
        match: /.+\@.+\..+/ // regex to validate email format
    },
    password: {
        type: String,
        required: true, // password is required
        minlength: 6,    // minimum password length
    },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
