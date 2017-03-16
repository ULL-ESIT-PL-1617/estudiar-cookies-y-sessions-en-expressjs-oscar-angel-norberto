var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

var auth= function(req,res,next){
    if(req.session && req.session.user === "amy" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};

app.get('/login', function(req, res){
    if(!req.query.username || !req.query.password){
        res.send('login failed');
    } else if(req.query.username === "amy" || req.query.password === "amypassword"){
        req.session.user = "amy";
        req.session.admin = "true";
        res.send("login success!");
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

app.get('/content', auth, function(req, res){
    res.send("You can only see this after you have logged in");
});

app.listen(8081);
console.log("app running at port 8081");
