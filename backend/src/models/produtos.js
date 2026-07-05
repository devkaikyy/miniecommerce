import mongoose from "mongoose";

const produtoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
         image: {
           type: String,
           default: null
        }

    }
)

const Produtos = mongoose.model("Produtos", produtoSchema)

export default Produtos