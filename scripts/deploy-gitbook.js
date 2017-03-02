'use strict';

var fs = require('fs-extra');
var ghpages = require('gh-pages');


var contenido = fs.readFileSync("./package.json");
  
var configuracion = JSON.parse(contenido);


ghpages.publish('./public', { repo: configuracion.repository.url, logger: function(m) { console.error(m); } });