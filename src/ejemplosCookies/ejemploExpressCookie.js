var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());

app.set('port', (process.env.PORT || 8080));

app.get('/crear/:cookie',function(req, res) {
     res.cookie(req.params.cookie , 'cookie_datos', {maxAge : 1000 * 60} //60 segundos
     ).redirect('/');
});

app.get('/borrar/:cookie', function(req,res) {
     res.clearCookie(req.params.cookie);
     //res.send("Cookie borrada: " + req.params.cookie);
     res.redirect('/');
});

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
  res.send("Cookies :  " + util.inspect(req.cookies))
  res.end();
}); 

app.listen(app.get('port'), function() {
  console.log("Puerto: 8080");
});
