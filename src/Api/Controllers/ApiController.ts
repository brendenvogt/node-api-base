var express = require('express');
var router = express.Router();

import BoolContract from '../Contracts/BoolContract';

// base
router.get('/', api);
function api(req: any, res: any) {
    res.json(new BoolContract(true));
};

export = router;
