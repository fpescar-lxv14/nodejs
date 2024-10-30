import { Router } from "express";
import * as user from "../controllers/user.js"

const usersRouter = Router()
usersRouter.post("/", user.createUser)
usersRouter.get("/", user.getUsers)
usersRouter.get("/:id", user.getUserById)
usersRouter.put("/:id", user.updateUser)
usersRouter.delete("/:id", user.deleteUser)

export default usersRouter;