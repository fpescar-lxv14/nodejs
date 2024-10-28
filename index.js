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
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// Implementacion de Rutas
app.use("/users", usersRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))