// Dependencias del Proyecto
import { resolve } from "path"
import express from "express";
import { engine } from "express-handlebars";
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
app.engine("hbs", engine({
    layoutsDir: resolve("views/layouts"),
    partialsDir: resolve("views/partials"),
    defaultLayout: resolve("views/index.hbs"),
    extname: "hbs"
}))
app.set("view engine", "hbs");
app.use(express.json()); // Solicitudes FormData
app.use(express.urlencoded({ extended: false })) // Solicitudes x-www-form-urlencoded
// Implementacion de Rutas
app.use("/users", usersRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))