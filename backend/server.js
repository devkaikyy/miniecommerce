import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/database/data.js'
import user from './src/router/user.js'
import produtosRoute from './src/router/produtosRoute.js'
import dns from 'dns'


dotenv.config()

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/usuario", user)
app.use("/produtos", produtosRoute)
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send('servidor funcionando!')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta: ${process.env.PORT}`)
})