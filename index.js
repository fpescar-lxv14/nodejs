// Dependencias de Desarrollo
import { configDotenv } from "dotenv";
// Dependencias del Proyecto
import express from "express";
import { createServer } from "node:http"
import { Server } from "socket.io"
// Modulos del Proyecto
import { dbConn } from "./src/db.config.js";
import { loadChat, saveMessage } from "./src/chat.controller.js";

configDotenv()
const {
    PORT = 3000,
    URI = "mongodb://localhost:27017/blockblister",
} = process.env

const app = express();
const server = createServer(app);
const ws = new Server(server);
dbConn(URI)
// Conexion de Clientes
ws.on("connection", (socket) => {
    console.log("se conecto el cliente " + socket.id);
    // Recepcion de Mensaje (cliente)
    socket.on("message", (data) => {
    // Transmision de Mensaje (clientes)
        saveMessage(data);
        ws.emit("message", data)
    })
    socket.on("load", () => {
        loadChat()
        .then((results) => socket.emit("load", results))
        socket.emit("userId", socket.id)
    })
    // Desconexion del Cliente
    socket.on("disconnect", () => console.log("se ha desconectado el cliente "+ socket.id))
})
// Configuracion del Servidor
app.use(express.static('public'));
server.listen(PORT, () => console.log("servicio ejecutandose"))