var express = require('express');
var router = express.Router();

const BContract = require('../Contracts/BoolContract.ts');

// base
router.get('/', api);
function api(req: any, res: any) {
    res.json(new BContract(true));
};

module.exports = router;
