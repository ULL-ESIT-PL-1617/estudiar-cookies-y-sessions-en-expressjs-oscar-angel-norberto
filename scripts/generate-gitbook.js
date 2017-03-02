var exec = require('child_process').exec;
function puts(error, stdout, stderr){console.log("Generado manual en gh-pages(no despliegue)")}
exec("./node_modules/.bin/gitbook build ./docs ./gh-pages",puts);
