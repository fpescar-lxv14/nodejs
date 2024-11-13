import express from "express"
import { dbConn } from "./config/db.js"
import mainRouter from "./routes/main.js"
import usersRouter from "./routes/user.js"
const {
    PORT = 3000,
    URI = "mongodb://localhost:27017",
} = process.env
dbConn(URI)
export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", usersRouter)
app.use("/", mainRouter)

app.listen(PORT, () => console.log('service running'))