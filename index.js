// Dependencias del Proyecto
import { resolve } from "path"
import express from "express";
import { engine } from "express-handlebars";
// Dependencias de Desarrollo
import { configDotenv } from "dotenv";
// Importacion de Modulos
import usersRouter from "./src/routes/user.js";
import appLinks from "./src/data/app.json" with { "type": "json" }
// Configuracion
configDotenv();
// Declaraciones
const { 
    APP="Mi Aplicacion", 
    DESCRIPTION="inserte descripcion aqui",
    VERSION="v0.0.0-beta",
    PORT=3000
} = process.env;
const app = express();
app.engine("hbs", engine({
    defaultLayout: resolve("views/index.hbs"),
    extname: "hbs"
}))
app.set("view engine", "hbs");
app.use(express.json()); // Solicitudes FormData
app.use(express.urlencoded({ extended: false })) // Solicitudes x-www-form-urlencoded
// Implementacion de Rutas
app.use("/users", usersRouter);
app.get("/home", (_, res) => {
    res.render('layouts/main', {
        title: APP, ...appLinks,
        description: `${DESCRIPTION} (version: ${VERSION})`
    })
})
app.get("*", (_,res) => res.render("layouts/error", {
    title: APP, ...appLinks,
    error: {
        title: "ERROR 404",
        message: "Página no encontrada"
    },
}))
app.use(express.static('public'));
app.listen(PORT, () => console.log("Servicio ejecutandose"))