import express from "express"
// import { dbConn } from "./config/db.js"

export const app = express();
app.get('/', (req, res) => {
    res.status(200).json({
        title: "Fundacion pescar",
        message: "bienvenido a la pagina principal"
    })
})
app.get("/users", (req, res) => {
    userModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
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

app.listen(PORT, () => console.log('service running'))
