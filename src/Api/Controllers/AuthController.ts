var express = require('express');
var router = express.Router();

router.post('/login', login);
function login(req: any, res: any) {
    console.log("logging in");
};

router.post('/signup', signup);
function signup(req: any, res: any) {
    console.log("signing up");
};

router.post('/refresh', refresh);
function refresh(req: any, res: any) {
    console.log("refresh token")
};

export = router;
