import { writeFile, readFile, appendFile, unlink } from "node:fs";

console.log("Creando Archivo")
writeFile("assets/trash.md", "debo ser eliminado", (err) => {
    if (err) throw err
    console.log("Archivo creado exitosamente")
})
console.log("Creacion Finalizada")

console.log("Leyendo Archivo")
readFile("assets/fs.md", (err, data) => {
    if (err) throw err
    console.log("Procesando Contenido")
    console.log(data); // Buffer
    console.log("Contenido:\n" + data) // string
    console.log("Contenido Procesado")
})
console.log("Lectura Finalizada")

console.log("Actualizando Archivo")
appendFile("assets/fs.md", process.argv[2] ?? "", (err) => {
    if (err) throw err
    console.log("Actualizacion Exitosa");
})
console.log("Actualizacion Finalizada")

console.log("Eliminando Archivo")
unlink("assets/trash.md", (err) => {
    if (err) throw err
    console.log("Eliminacion Exitosa")
})
console.log("Eliminacion Finalizada")