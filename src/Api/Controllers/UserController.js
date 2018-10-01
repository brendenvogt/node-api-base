var mongoose = require('mongoose'),
    UserEntity = mongoose.model('User');

var UserResponseContract = require('../Contracts/UserContract');

exports.getUsers = function (req, res) {
    UserEntity.find({}, function (err, task) {
        console.log("getting users");
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.getUser = function (req, res) {
    UserEntity.findOne({ username: req.params.username }, function (err, user) {
        console.log(`getting ${user}`);
        if (err)
            res.send(err);
        var newUser = new UserResponseContract(user.username);
        res.json(newUser);
    });
};

exports.postUser = function (req, res) {
    var newUser = new UserEntity(req.body);
    newUser.save(function (err, user) {
        console.log(`posting ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.putUser = function (req, res) {
    UserEntity.findOneAndUpdate({ username: req.params.username }, req.body, { new: false }, function (err, user) {
        console.log(`putting ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.patchUser = function (req, res) {
    UserEntity.findOneAndUpdate({ username: req.params.username }, req.body, { new: false }, function (err, user) {
        console.log(`patching ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.deleteUser = function (req, res) {
    UserEntity.deleteOne({
        username: req.params.username
    }, function (err, user) {
        console.log(`deleting ${user}`);
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};