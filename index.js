// Dependencias del Proyecto
import express from "express";
import { engine } from "express-handlebars";
// Dependencias de Desarrollo
import { configDotenv } from "dotenv";
// Importacion de Modulos
import dbConn from "./src/config/db.js";
import sessionRouter from "./src/routes/session.js";
import usersRouter from "./src/routes/user.js";
import morgan, { format } from "morgan";
// Configuracion
configDotenv();
// Declaraciones
const {
    PORT=3000,
    URI="mongodb://localhost:27017/blockblister",
} = process.env;
dbConn(URI);
const app = express();
// Motor de Plantillas
app.engine("hbs", engine({
    defaultLayout: process.cwd() + "/views/index",
    extname: "hbs"
}))
app.set("view engine", "hbs");
app.use(express.json()); // FormData
app.use(express.urlencoded({ extended: false })) // x-www-form-urlencoded
app.use(morgan("tiny"));
// Implementacion de Rutas
app.use("/",sessionRouter)
app.use("/users", usersRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))