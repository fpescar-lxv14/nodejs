import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    userData: {
        type: Object,
        properties: {
            first_name: String,
            last_name: String,
            birth_date: Date,
            id_type: String,
            id_number: String,
            country: String,
            nationality: String,
            phone: String
        }
    }
})
export const userModel = mongoose.model('users', userSchema)