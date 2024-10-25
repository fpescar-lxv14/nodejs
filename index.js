import { readFile } from "fs";
import { createServer } from "http";

const { PORT=3000 } = process.env;
const app = createServer( (req,res) => {
    let type = "text"
    let data = "public/404.html"

    switch(req.method){
        case "GET":
            if (/^\/$|\.html|home/.test(req.url)){
                type = "text/html";
                data = 'public/index.html';
            }
            if (/styles|default\.css|\.css/.test(req.url)){
                type = "text/css";
                data = 'public/styles/default.css'
            }
            if (/index\.js|script|main\.js|\.js/.test(req.url)){
                type = "text/javascript";
                data = 'public/scripts/index.js'
            }
            if (/\.json|request|api$/.test(req.url)){
                type = "application/json";
                data = 'public/assets/data.json'
            }
        break;
        case "POST":
        break;
        case "PUT":
        break;
        case "DELETE":
        break;
    }
    readFile(data, (err, data) => {
        if (err) throw err
        console.log(req.url)
        res.writeHead(200, { "Content-Type": type})
        res.end(data)
    })
})
app.listen(PORT, () => console.log("Servicio ejecutandose"))