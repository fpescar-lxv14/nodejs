const http = require("http")
const PORT = 3000;
const server = http.createServer((req, res) => {
    // Peticion
    console.log("Direccion: "+req.url+"\nMetodo: "+req.method);
    // Respuesta
    res.end("Bienvenido al Servidor")
})

server.listen(PORT, () => console.log("service running"))
/** PUERTOS
 * Conocidos: Poseen nombre y son de uso general | 0 | 1023 |
 * Registrados: Especificos para ciertas aplicaciones | 1024 | 49151 |
 * Dinamicos: Se utilizan para iniciar comunicaciones | 49152 | 65535 |
 */