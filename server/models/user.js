const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true, //utilise un email une seule fois
        required: true, 
    },
    password: String,
    todo: [{
        title: String,
        date: {
            type: Date,
            default: Date.now(),
        },
        Done: {type: Boolean, default: false}
    }]
});

module.exports = user;
