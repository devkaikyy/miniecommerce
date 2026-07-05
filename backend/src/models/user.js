import mongoose from "mongoose";

const UsuarioSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

const User =  mongoose.model("User", UsuarioSchema)

export default User