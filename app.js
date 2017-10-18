var express = require('express');

var app = express(); 

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//Routes

app.get('/', routes.intro);

app.get('/home', routes.home);

app.get('/contact', routes.contact);

app.get('*', routes.notFound);


app.listen(3000, function(){
    console.log("The app is running on Local Host 3000");
});