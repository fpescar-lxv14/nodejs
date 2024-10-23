import fs from "node:fs";

// Crear un Archivo
console.log("Creando Archivo")
    fs.writeFileSync('assets/trash.txt', "soy nuevo");
console.log("Creacion Finalizada")

// Leer un Archivo
console.log("Leyendo Archivo")
    const file = fs.readFileSync('assets/fs.md');
    console.log(file) // Buffer
    console.log(file.toLocaleString()) // String
console.log("Lectura Finalizada")

// Actualizar un Archivo
console.log("Actualizando Archivo")
    fs.appendFileSync('assets/fs.md', process.argv[2]);
console.log("Actualizacion Finalizada")

// Eliminar un Archivo
console.log("Eliminando Archivo")
    fs.unlinkSync('assets/trash.txt');
console.log("Eliminacion Finalizada")