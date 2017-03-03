var express = require('express');
var app = express();

//Creación de un router
var router = express.Router();
//Adición de una ruta reconocida por el router
router.get('/final', function(req, res) {
  res.send('Router Final');
});
//Adición de una ruta reconocida por el router
router.get('/inicio', function(req, res) {
  res.send('Router Inicio');
});

//Adición de una ruta reconocida por el router
router.get('/', function(req, res) {
  res.send('Router Raiz');
});

module.exports = router
