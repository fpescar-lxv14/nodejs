import usersModel from "../models/user.js";

export const createUser = (req, res) => { 
    const { user, email } = req.body
    const data = usersModel.find(usr => usr.user === user || usr.email === email)
    if (!data){
        usersModel.push({id: usersModel.length + 1, ...req.body})
        res.json({
            message: "usuario creado exitosamente",
            data: req.body ?? "no hay datos"
    })}
    else res.json({
        title: "error al crear un usuario",
        message: "ya existe un usuario con ese nombre o correo"
    })
}
export const getUsers = (req, res) => { 
    res.json(usersModel)
}
export const getUserById =(req, res) => { 
    const data = usersModel.find(usr => usr.id === Number(req.params.id)) ?? { message: "usuario no encontrado" }
    res.json(data)
}