var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var UserEntity = require('./src/Core/Entities/UserEntity');
var AuthEntity = require('./src/Core/Entities/AuthEntity');

// mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-api-base', { useNewUrlParser: true });

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
app.use('/api', require('./src/Api/Routes/ApiRouter'));
app.use('/api/user', require('./src/Api/Routes/UserRouter'));
app.use('/api/auth', require('./src/Api/Routes/AuthRouter'));

// start app
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
