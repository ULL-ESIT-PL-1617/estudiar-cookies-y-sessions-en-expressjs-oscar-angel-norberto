var exec = require('child_process').exec;
function puts(error, stdout, stderr){console.log("Generado manual en public(no despliegue)")}
exec("./node_modules/.bin/gitbook build ./docs ./public",puts);
