import User from "../models/user.js";
import bcript from 'bcrypt'
import jwt from 'jsonwebtoken'

export const buscarUsuario = async (req, res) => {
    try {
        const buscar = await User.find()
         return res.status(201).json(buscar)
    } catch(erro) {
         return res.status(400).json({
            erro: erro.message
        })
    }
}

export const cadastrar = async (req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
          return res.status(400).json({
            erro: 'preencha todos os campos!'
          })
        }

        if(password.length <= 6) {
           return res.status(400).json({
                erro: 'erro, senha muito curta'
            })
        }

        const emailExist = await User.findOne({email})

        if(emailExist) {
          return res.status(400).json({
            erro: 'email ja cadastrado'
          })
        }

        const hasdPassword = await bcript.hash(password, 10)

        await User.create({
            name,
            email,
            password: hasdPassword
        })

        return res.status(201).json({
            message: 'Usuario cadastrado com sucesso! aguarde.'
        })

    } catch (erro) {
        return res.status(500).json({
            erro: erro.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password) {
           return res.status(400).json({
                erro: 'preencha todos os campos!'
            })
        }

        const user = await User.findOne({email})

        if(!user) {
          return res.status(404).json({
                erro: 'usuario não encontrado!'
            })
        }

        const senhaExist = await bcript.compare(password, user.password)

        if(!senhaExist) {
          return res.status(401).json({
                erro: 'Senha incorreta!'
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"

            }
        )

        return res.status(201).json({
            message: 'login realizado com sucesso!',
            token
        })
    } catch (erro) {
       return res.status(500).json({
         erro: erro.message
       })
    }
}