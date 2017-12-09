var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

// home page 
app.get('/', function(req, res) {
    res.render('content/index');
});

app.listen(3000);
console.log('Running on 3000');
