import { userModel } from "./user.model.js"

export const findUser = async(v) => {
    const user = await userModel.findOne(filter(v), {username: 1})
    console.log(user)
    return user?.username
}

export const filter = (v) => ({
    $or: [
        {username: v},
        {email: v},
        {"userData.phone": v}
    ]
})