var UserRequestModel = require('../contracts/UserRequestModel');
var UserResponseModel = require('../contracts/UserResponseModel');


exports.getUsers = function (req, res) {
    var responseModel = new UserResponseModel("brendenvogt");
    res.send(responseModel);
};

exports.getUser = function (req, res) {
    var responseModel = new UserResponseModel(req.params.username);
    res.send(responseModel);
};

exports.postUser = function (req, res) {
    var responseModel = new UserResponseModel("brendenvogt");
    res.send(responseModel);
};

exports.putUser = function (req, res) {
    var responseModel = new UserResponseModel(req.params.username);
    res.send(responseModel);
};

exports.patchUser = function (req, res) {
    var responseModel = new UserResponseModel(req.params.username);
    res.send(responseModel);
};

exports.deleteUser = function (req, res) {
    var responseModel = new UserResponseModel(req.params.username);
    res.send(responseModel);
};