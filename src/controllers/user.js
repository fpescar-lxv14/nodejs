import usersModel from "../models/user.js";

export const createUser = async (req, res) => { 
    try {
        const newUser = new usersModel(req.body);
        const data = await newUser.save();
        res.json({ message: "cuenta creada exitosamente", data });
    } catch (err) {
        res.status(500).json({ error: "Error al crear usuario", details: err.message });
    }
};
export const getUsers = async (req, res) => { 
    try {
        const results = await usersModel.find().sort({_id: -1});
        if (results.length) res.status(200).json(results);
        else res.status(404).json({ message: "No se encontraron resultados" })
    } catch (err) {
        res.status(500).json({ error: "Error al obtener usuarios", details: err.message });
    }
};
export const getUserById = async (req, res) => { 
    const { id } = req.params;
    try {
        const data = await usersModel.findOne(filter(id));
        if (data) res.json(data);
        else res.status(404).json({ message: "No se encontraron resultados" })
    } catch (err) {
        res.status(500).json({ error: "Error al obtener usuario", details: err.message });
    }
};
export const updateUser = async (req, res) => {
    const { params:{id}, body } = req
    try {
        const status = await usersModel.updateOne(filter(id),{$set:{ userData: body }});
        console.log(body)
        res.json(status);
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar usuario", details: err.message });
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const status = await usersModel.deleteOne(filter(id));
        const message = status?.deletedCount ? "Usuario eliminado" : "No se pudo eliminar la cuenta";
        res.json({ message });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar usuario", details: err.message });
    }
};
export const filter = (text) => !Number(`0x${text}`) ? { username: text } : { _id: text }