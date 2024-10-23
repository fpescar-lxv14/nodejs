import fs from "node:fs";

console.log("Creando Archivo")
    fs.writeFileSync('assets/trash.txt', "debo ser eliminado");
console.log("Creacion Finalizada")

console.log("Leyendo Archivo")
    const file = fs.readFileSync('assets/fs.md');
    console.log(file) // Buffer
    console.log(file.toLocaleString()) // String
console.log("Lectura Finalizada")

console.log("Actualizando Archivo")
    fs.appendFileSync('assets/fs.md', process.argv[2]);
console.log("Actualizacion Finalizada")

console.log("Eliminando Archivo")
    fs.unlinkSync('assets/trash.txt');
console.log("Eliminacion Finalizada")