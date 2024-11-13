import { Router } from "express"
import * as userController from "../controllers/user.js"

const usersRouter = Router()
usersRouter.get("/", userController.findUsers)
usersRouter.post("/", userController.createUser)
usersRouter.delete("/:id", userController.deleteUser)
export default usersRouter