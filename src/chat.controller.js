import { chatModel } from "./chat.model.js"

export const loadChat = async() => {
    try {
        const data = await chatModel.find()
        return data
    }
    catch (err) { return err }
}
export const saveMessage = async (data) => {
    try{
        const msg = new chatModel(data)
        const success = await msg.save()
        if (success) return "mensaje guardado"
    }
    catch (err) { return err }
}
