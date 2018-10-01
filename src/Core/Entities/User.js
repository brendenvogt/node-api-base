'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String
    }
    // password not for production use 
});

module.exports = mongoose.model('User', UserSchema);