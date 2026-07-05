import { Router } from "express";
import { buscarUsuario, cadastrar, login } from "../controllers/user.js";
const router = Router()

router.post("/cadastro", cadastrar)
router.post("/login", login)
router.get("/buscarUser", buscarUsuario)

export default router