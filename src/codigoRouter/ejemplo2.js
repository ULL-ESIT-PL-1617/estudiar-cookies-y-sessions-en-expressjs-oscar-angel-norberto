var express = require('express');
var app = express();

//Creación de un router
var router = express.Router();

//Adición de una ruta reconocida por el router
router.get('/:id', function(req, res) {
  res.send(req.params.saludo);
});
//Manejo de un parametro detectado(id)
router.param('id', function (req, res, next, valor, id) {
  req.params.saludo = "Hola " + valor + "¡¡¡";
  next();
});
app.use('/usuario', router);

app.set('port', (process.env.PORT || 8080));

//Ruta raiz de la aplicacion principal
app.get('/',function (req, res) {
  res.send('Raiz');
});

app.listen(app.get('port'), function() {
  console.log('En el puerto: ', app.get('port'));
});
