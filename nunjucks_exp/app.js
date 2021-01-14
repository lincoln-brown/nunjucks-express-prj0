const express = require('express');
const app= express();
const port= 3000
const nunjucks= require('nunjucks');
app.use(express.static('static'));

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let env = nunjucks.configure('templates');



app.get('/', function(req, res) {
    res.render('home.html');
});

app.get('/profile', function(req, res) {
    res.render('profile.html',{image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F102974%2Fscreenshots%2F2726841%2Fhead_bob.gif&f=1&nofb=1",name:"lincoln Brown ",Tag:"@the_Linkist"});
});

app.get('/about', function(req, res) {
    res.render('about.html',{ name: 'James' });
});






app.listen(port,()=>{
    console.log('started on ',port);
});