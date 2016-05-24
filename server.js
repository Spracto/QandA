var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var app = express();
app.use(bodyParser.json());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, '/client')));

app.listen(8000, function(){

})
