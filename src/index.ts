import express from "express";
const {
    PORT = 3000,
    URI = "mongodb://localhost:27017/test"
} = process.env
const app = express();
interface jsonResponse {
    code?:number,
    title?:String,
    message:String,
    data?:[Object]|Object
}
app.get("/", (_, res):void => {
    const response:jsonResponse = {
        title: "Fundacion Pescar App",
        message: "Bienvenido al sitio",
    }
    res.json(response)
})
app.listen(PORT, () => console.log("service running on "+PORT));