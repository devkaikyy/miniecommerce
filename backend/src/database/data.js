import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo conectado com sucesso')
    } catch (erro) {
        console.log(erro)
        console.log('erro no mongo')
    }
}