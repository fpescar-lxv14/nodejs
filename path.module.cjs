const path = require('node:path');
/** VARIABLES GLOBALES COMMONJS
 * __dirname: Ruta de la carpeta que ejecuta el script
 * __filename: Ruta del archivo que se esta ejecutando
 */

// Extrae las partes de la ruta (Descomposicion)
console.log("Identificacion de partes: ", path.parse(__filename)) 
// Genera una ruta a partir de los argumentos (Composicion)
console.log("Generacion de Ruta: ", path.resolve("index.html"))

function extract(file){
    return path.parse(file);
}
function create(file){
    return path.resolve(file);
}
module.exports = { extract, create }