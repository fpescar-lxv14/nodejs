import mongoose from "mongoose"

export const dbConn = (URI) => 
    mongoose.connect(URI)
    .then(() => console.log("base de datos conectada"))
    .catch(err => console.error(err))