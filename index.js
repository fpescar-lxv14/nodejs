// Dependencias del Proyecto
import express from "express";
// Dependencias de Desarrollo
import { configDotenv } from "dotenv";
// Importacion de Modulos
import usersRouter from "./src/routes/user.js";
// Configuracion
configDotenv();
// Declaraciones
const { 
    APP="Mi Aplicacion", 
    DESCRIPTION="inserte descripcion aqui",
    VERSION:version="v0.0.0-beta",
    PORT=3000
} = process.env;
const app = express();
app.set("view engine", "ejs");
app.use(express.json()); // Solicitudes FormData
app.use(express.urlencoded({ extended: false })) // Solicitudes x-www-form-urlencoded
// Implementacion de Rutas
app.use("/users", usersRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))