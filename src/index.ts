var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var UserEntity = require('./Core/Entities/UserEntity.ts');
var AuthEntity = require('./Core/Entities/AuthEntity.ts');

// mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-api-base', { useNewUrlParser: true });

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
app.use('/api', require('./Api/Controllers/ApiController.ts'));
app.use('/api/user', require('./Api/Controllers/UserController.ts'));
app.use('/api/auth', require('./Api/Controllers/AuthController.ts'));

// start app
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
