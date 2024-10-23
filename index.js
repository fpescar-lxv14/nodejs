import { createServer } from "http";

const { PORT=3000 } = process.env;
const app = createServer( (req,res) => {
    let data = "Bienvenido al Servidor"

    

    res.end(data)
})
app.listen(PORT, () => console.log("Servicio ejecutandose"))