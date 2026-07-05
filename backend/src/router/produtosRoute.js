import { Router } from "express";
import {criarProduto, buscarProduto, deletarProduto} from '../controllers/produtoCont.js'
import { upload } from "../middlewares/upload.js";


const router = Router()

router.post("/criarProdutos", upload.single("image"), criarProduto)
router.delete("/deletarProduto/:id", deletarProduto)
router.get('/buscarProdutos', buscarProduto)

export default router