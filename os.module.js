// Importacion CommonJS
const os = require('os')
// Declaracion de Constantes
const host = os.hostname()
const system = os.version() + "(" + os.arch() + ")"
const cpu = os.cpus()[0].model
const memory = process.memoryUsage().heapTotal
// Funcion a exportar
const getSystemInfo = () => `
Informacion del Sistema
    Usuario: ${os.userInfo().username}
    Nombre del Equipo: ${host}
    Sistema Operativo: ${system}
    Modelo de Procesador: ${cpu}
    Memoria RAM Disponible: ${ memory / (2**20)}
    Almacenamiento Disponible: ${os.freemem() / (2**20)}
`
console.log(getSystemInfo())
// Exportacion del Modulo
module.exports = getSystemInfo