import mongoose from "mongoose";

export const userModel = mongoose.model("users", mongoose.Schema({
    username: String,
    email: String,
    password: String,
}))