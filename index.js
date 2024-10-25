import { readFile, readFileSync } from "fs";
import { createServer } from "http";

import mapTypes from "./src/utils/contentTypes.js";
import getFile from "./src/utils/publicFiles.js";

const { PORT=3000 } = process.env;
const app = createServer( (req,res) => {
    const file = 'public/' + getFile(req.url);
    const type = mapTypes(file);

    readFile(file, (err, data) => {
        const response = !err ? data : readFileSync("public/404.html")
        res.writeHead(200, { "Content-Type": type})
        res.write(response)
        res.end()
    })
})
app.listen(PORT, () => console.log("Servicio ejecutandose"))