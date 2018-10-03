var mongoose = require('mongoose'),
    UserEntity = mongoose.model('User');

var express = require('express');
var router = express.Router();

import UserContract from '../Contracts/UserContract';

router.get('/', getUsers);
function getUsers(req: any, res: any) {
    UserEntity.find({}, function (err: any, users: any) {
        console.log("getting users");
        if (err)
            res.send(err);
        res.json(users);
    });
};

router.get('/:username', getUser);
function getUser(req: any, res: any) {
    UserEntity.findOne({ username: req.params.username }, function (err: any, user: any) {
        console.log(`getting ${user}`);
        if (err)
            res.send(err);
        if (user) {
            var newUser = new UserContract(user.username);
            res.json(newUser);
        } else {
            res.json(null);
        }
    });
};

router.post('/', postUser);
function postUser(req: any, res: any) {
    var newUser = new UserEntity(req.body);
    newUser.save(function (err: any, user: any) {
        console.log(`posting ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

router.put('/:username', putUser);
function putUser(req: any, res: any) {
    UserEntity.findOneAndUpdate({ username: req.params.username }, req.body, { new: false }, function (err: any, user: any) {
        console.log(`putting ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

router.patch('/:username', patchUser);
function patchUser(req: any, res: any) {
    UserEntity.findOneAndUpdate({ username: req.params.username }, req.body, { new: false }, function (err: any, user: any) {
        console.log(`patching ${user}`);
        if (err)
            res.send(err);
        res.json(user);
    });
};

router.delete('/:username', deleteUser);
function deleteUser(req: any, res: any) {
    UserEntity.deleteOne({
        username: req.params.username
    }, function (err: any, user: any) {
        console.log(`deleting ${user}`);
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};

export = router;