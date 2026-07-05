import Produtos from '../models/produtos.js'

export const criarProduto = async (req, res) => {
     try {
      
       const {name, description, preco, stock} = req.body
        

          const produtos = await Produtos.create({
             name,
             description,
             preco,
             stock,
             image:  req.file ? req.file.filename : null,
            })
            
            return res.status(201).json({
               message: 'produtos criado com sucesso!',
               produtos
            })
            
     } catch (erro) {
        return res.status(500).json({
            erro: erro.message
        })
     }
}

export const deletarProduto = async (req, res) => {
   try {
      const deletar = await Produtos.findByIdAndDelete(req.params.id)

      if(!deletar) {
        return res.status(400).json({
            message: 'produto não encontrado'
        })
      }

      return res.status(201).json({
        message: ' produto deletado com sucesso!',
        deletar
      })
   } catch (erro) {
      return res.status(500).json({
        erro: erro.message
      })
   }
}

export const buscarProduto = async (req, res) => {
   try {
        const { search } = req.query;

        let filtro = {};

        if (search) {
            filtro.name = {
                $regex: search,
                $options: "i"
            };
        }

        const produ = await Produtos.find(filtro);
         res.status(200).json(produ);

    } catch (erro) {
        res.status(500).json({
            message: erro.message
        })
    }

}