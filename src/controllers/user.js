import usersModel from "../models/user.js";

export const createUser = async(req, res) => { 
    try{
        const newUser = new usersModel(req.body)
        const status = await newUser.save()
        res.json({ message: status?.acknowledged ? "usuario creado" : "no se pudo crear el usuario"})
    }
    catch (err){ res.json(err) }
}
export const getUsers = async (req, res) => { 
    try{
        const results = await usersModel.find()
        if (results.length) res.status(200).json(results)
        else res.status(404).json({ message: "no se encontraron resultados" })
    } 
    catch (err){ res.json(err) }
}
export const getUserById = (req, res) => { 
    const { id } = req.params;
    usersModel.findOne(filter(id))
    .then(data => res.json(data ?? { message: "no se encontraron resultados" }))
    .catch(err => res.json(err))
}
export const updateUser = (req, res) => {
    const { params:{id}, body:{userData}} = req
    usersModel.updateOne(filter(id),{ $set: userData })
    .then((status) => res.json({
        message: status?.modifiedCount ? 
        "datos actualizados" : "no se pudo realizar la operacion"
    }))
}
export const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        const status = await usersModel.deleteOne(filter(id))
        const message = status?.deleteCount ? "usuario eliminado" : "no se pudo eliminar la cuenta"
        res.json(message)
    }
    catch (err){ res.json(err) }
}
export const filter = (text) => ({ $or: [{_id:text},{ username:text }] })