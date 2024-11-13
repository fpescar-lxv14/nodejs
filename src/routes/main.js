import { Router } from "express"
const mainRouter = Router()

mainRouter.get('/', (req, res) => {
    res.status(200).json({
        title: "Fundacion pescar",
        message: "bienvenido a la pagina principal"
    })
})
mainRouter.use("*", (req, res) => res.status(404).json({
    message: "pagina no encontrada"
}))
export default mainRouter