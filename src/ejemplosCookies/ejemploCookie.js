var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');
var util = require('util');
 
function onRequest(req, res) {
  
  console.log("URL: " + util.inspect(req.url));
  var query = url.parse(req.url, true, true).query;
  console.log("URL analizada:" + util.inspect(query));
 
  if (query && query.name) {
    // Creando un cookie a partir del nombre introducido
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 10 // 10 segundos 
    }));
 
    
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
    return;
  }
 
  // Analisis del cookie del usuario si existe
  console.log("cookie no analizado: " + util.inspect(req.headers.cookie));
  var cookies = cookie.parse(req.headers.cookie || ''); 
  console.log("cookie analizado: " + util.inspect(cookies));
  var name = cookies.name;
 
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
 
  if (name) {
    res.write('<p>Usuario conocido: <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Usuario desconocido</p>');
  }
 
  res.write('<form method="GET">');
  res.write('<input placeholder="Introduce un nombre" name="name"> <input type="submit" value="Enviar nombre">');
  res.end('</form');
}
 
http.createServer(onRequest).listen(process.env.PORT || 3000);