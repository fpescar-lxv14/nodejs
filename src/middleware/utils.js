import bcrypt from "bcrypt";
import { UserData } from "../dtos/userdto.js"
import usersModel from "../models/user.js";

export const check = (req, res, next) => {
    const { username, password } = req.body
    usersModel.findOne({username})
    .then(data => {
        const passed = bcrypt.compareSync(password, data?.password)
        passed ? next() : res.render("layouts/login", {
            message: "no se pudo iniciar sesion, revise los datos ingresados"
        })
    })
    .catch(err => res.json(err))
}
export const hash = (req, res, next) => {
    const { password: [p1, p2] } = req.body
    if (p1 === p2){
        bcrypt.hash(p1, 10, (err, hashedPass) => {
            if (err) res.render('/layouts/signin', { 
                ...err, message: "no se ha podido crear la cuenta" 
            })
            else {
                req.body.password = hashedPass
                next()
            }
        })}
    else {
        res.render('layouts/signin', {
            message: "las contraseñas no coinciden"
        })
    }
}
export const verify = (req, res, next) => {
    next()
}
export const userData = (req, res, next) => {
    req.body = new UserData(req.body)
    next()
}