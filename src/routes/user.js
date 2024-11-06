import { Router } from "express";
import * as user from "../controllers/user.js"
import { userData, verify } from "../middleware/utils.js"

const usersRouter = Router()
usersRouter.post("/", user.createUser)
usersRouter.get("/", user.getUsers)
usersRouter.get("/:id", user.getUserById)
usersRouter.put("/:id", userData, user.updateUser)
usersRouter.delete("/:id", verify, user.deleteUser)

export default usersRouter;