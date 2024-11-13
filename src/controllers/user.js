import { userModel } from "../models/user.js"

export const findUsers = (req, res) => {
    userModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

export const createUser =  (req, res) => {
    const newUser = new userModel(req.body)
    newUser.save()
    .then(() => res.status(201).json({
        message: "usuario creado exitosamente",
        data: newUser
    }))
    .catch(err => res.status(500).json(err))
}

export const deleteUser = (req, res) => {
    userModel.deleteOne({ username: req.params.id })
    .then( () => res.json({ message: "cuenta eliminada" }))
    .catch(err => res.json(err))
}