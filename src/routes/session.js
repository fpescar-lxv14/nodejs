import { Router } from "express"
import * as session from "../controllers/user.js"
import { verify, check, hash } from "../middleware/utils.js"

const sessionRouter = Router()

sessionRouter.get("/", verify, (req, res) => {})
sessionRouter.get("/login", (req, res) => res.render("layouts/login"))
sessionRouter.get("/signin", (req, res) => res.render("layouts/signin"))
sessionRouter.post("/login", check, (req, res) => res.render("layouts/home",{
    title: "BlockBlister",
    description: "aplicacion para compra, venta y alquiler multimedia",
    username: req.body.username
}))
sessionRouter.post("/signin", hash, session.createUser)

export default sessionRouter