import express from "express";

const { PORT=3000 } = process.env;

const app = express();
app.use(express.static('public'));

app.listen(PORT, () => console.log("Servicio ejecutandose"))