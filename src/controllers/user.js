import usersModel from "../models/user.js";

export const createUser = (req, res) => { 
    const { user, email } = req.body
    const data = usersModel.find(usr => usr.username === user || usr.email === email)
    if (!data){
        const id = usersModel[usersModel.length - 1].id + 1 ?? 1
        usersModel.push({id, ...req.body})
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
export const getUserById = (req, res) => { 
    const data = usersModel.find(usr => usr.id === Number(req.params.id) || usr.username === req.params.id) ?? { message: "usuario no encontrado" }
    res.json(data)
}
export const updateUser = (req, res) => {
    const { id } = req.params
    let idx;
    usersModel.map((usr,i) => {
        if (usr.id === Number(id) || usr.username === id) idx = i
    })
    console.log(idx);
    if (!isNaN(idx)){
        const prev = usersModel[idx]
        usersModel[idx] = {...prev, ...req.body}
        res.json({
            message: "se actualizaron los datos del usuario " + id
        })
    }
    else res.json({
        message: "no se pudieron modificar los datos del usuario " + id
    })
}
export const deleteUser = (req, res) => {
    const { id } = req.params
    let idx;
    usersModel.map((usr,i) => {
        if (usr.id === Number(id) || usr.username === id) idx = i
    })
    if (!isNaN(idx)){
        usersModel.splice(idx, 1);
        res.json({
            message: "se ha eliminado al usuario " + id
        })
    }
    else res.json({
        message: "no se ha podido eliminar al usuario " + id
    })
}