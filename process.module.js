const [ exe, file ] = process.argv
const getArgs = (arr) => arr.filter((_,i) => i >= 2)

console.log(`
    Ejecutable: ${exe},
    Archivo: ${file},
    Argumentos: ${getArgs(process.argv)}
`)

module.exports = { getArgs, exe, file }