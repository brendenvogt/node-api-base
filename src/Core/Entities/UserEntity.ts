'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserEntity = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String
    }
    // password not for production use 
});

export = mongoose.model('User', UserEntity);