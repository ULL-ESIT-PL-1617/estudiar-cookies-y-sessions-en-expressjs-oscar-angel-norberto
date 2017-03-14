var express = require('express');
var app = express();
var router = require('./miRouter.js');

//Uso del router en dos rutas
app.use('/viejo/home', router);
app.use('/nuevo', router);

app.set('port', (process.env.PORT || 8080));

//Ruta raiz de la aplicacion principal
app.get('/',function (req, res) {
  res.send('Raiz');
});

app.listen(app.get('port'), function() {
  console.log('En el puerto: ', app.get('port'));
});
