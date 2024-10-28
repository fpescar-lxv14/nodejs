import { Router } from "express";
import * as user from "../controllers/user.js"

const usersRouter = Router()
usersRouter.post("/", user.createUser)
usersRouter.get("/", user.getUsers)
usersRouter.get("/:id", user.getUserById)

export default usersRouter;