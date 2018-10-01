'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthEntity = new Schema({
    authToken: {
        type: String,
    },
    refreshToken: {
        type: String
    }
    //todo add timestamp
});

module.exports = mongoose.model('Auth', AuthEntity);