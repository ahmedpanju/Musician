var express = require('express');

var app = express(); 

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//Routes

app.get('/', routes.intro);

app.get('/home', routes.home);

app.get('/news', routes.news);

app.get('/gallery', routes.gallery)

app.get('/contact', routes.contact);

app.get('*', routes.notfound);


app.listen(process.env.PORT || 3000);
