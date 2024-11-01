// Dependencias del Proyecto
import express from "express";
// Dependencias de Desarrollo
import { configDotenv } from "dotenv";
// Importacion de Modulos
import dbConn from "./src/config/db.js";
import usersRouter from "./src/routes/user.js";
// Configuracion
configDotenv();
// Declaraciones
const {
    PORT=3000,
    URI="mongodb://localhost:27017/blockblister",
} = process.env;
dbConn(URI);
const app = express();
app.use(express.json()); // FormData
app.use(express.urlencoded({ extended: false })) // x-www-form-urlencoded
// Implementacion de Rutas
app.use("/users", usersRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))