import { Schema, model } from "mongoose"

const chatSchema = Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        minLength: 2,
        maxLength: 3000,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
    type: {
        type: String,
        pattern: /UNICAST|BROADCAST|MULTICAST/,
        default: "BROADCAST",
    },
    to: {
        type: String,
        default: ""
    }
})

export const chatModel = model('chats', chatSchema)