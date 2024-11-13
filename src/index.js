import express from "express"
import { dbConn } from "./config/db.js"
import { userModel } from "./models/user.js"

const {
    PORT = 3000,
    URI = "mongodb://localhost:27017",
} = process.env

dbConn(URI)
export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).json({
        title: "Fundacion pescar",
        message: "bienvenido a la pagina principal"
    })
})
app.get("/users", (req, res) => {
    userModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
})
app.post("/users", (req, res) => {
    const newUser = new userModel(req.body)
    newUser.save()
    .then(() => res.status(201).json({
        message: "usuario creado exitosamente",
        data: newUser
    }))
    .catch(err => res.status(500).json(err))
})
app.delete("/users/:id", (req, res) => {
    userModel.deleteOne({ username: req.params.id })
    .then( () => res.json({ message: "cuenta eliminada" }))
    .catch(err => res.json(err))
})
app.use("*", (req, res) => res.status(404).json({
    message: "pagina no encontrada"
}))

app.listen(PORT, () => console.log('service running'))
