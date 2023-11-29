var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'))

app.get('/', function(req,res){
    res.render('index.ejs')
});

app.get('/contact', function(req,res){
    res.render( 'contact.ejs',{qs:req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render( 'contact-success',{data:req.body});
});

// routing using route parameter for dynamic request:
app.get('/profile/:name', function(req,res){
    var data = {
        age:29,
        job: 'Frontend Dev',
        hobbies: ['Eating', 'Playing','Fishing']
    }
    res.render('profile',{person: req.params.name, data: data});
})
app.listen(3000);