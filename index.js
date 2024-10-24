import { createServer } from "http";

const { PORT=3000 } = process.env;
const app = createServer( (req,res) => {
    let type = "text"
    let data = "Bienvenido al Servidor"

    switch(req.method){
        case "GET":
            if (/\/|index|\.html|home/.test(req.url)){
                type = "text/html";
                data = `
                    <h1>Fundacion Pescar</h1>
                    <p>Capacitacion NodeJS</p>`;
            }
            if (/styles|default\.css|\.css|css/.test(req.url)){
                type = "text/css";
                data = `
                    * {
                        box-sizing: border-box;
                        font-family: sans-serif;
                    }
                    body{
                        margin: 0;
                    }`
            }
            if (/index\.js|script|main\.js|\.js/.test(req.url)){
                type = "text/javascript";
                data =" document.addEventListener('DOMContentLoaded', () => { console.log(\"Contenido Cargado\");})"
            }
            if (/\.json|request|api$/.test(req.url)){
                type = "application/json";
                data = JSON.stringify({
                    title: "Fundacion Pescar",
                    message: "Bienvenido al Servidor"
                })
            }
        break;
        case "POST":
            data = "Datos recibidos"
        break;
        case "PUT":
            data = "Actualizacion Solicitada"
        break;
        case "DELETE":
            data = "Eliminacion Procesada"
        break;
    }
    res.writeHead(200, { "Content-Type": type})
    res.write(data)
    res.end()
})
app.listen(PORT, () => console.log("Servicio ejecutandose"))