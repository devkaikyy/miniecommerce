import Nav from "../components/Nav"
import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import Produtos from "./Produtos";
import Footer from "../components/Footer";

function Criar(){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preco, setPreco] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

   async function handleCreateProduct() {
    try {
      const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("preco", preco);
    formData.append("stock", stock);

    if (image) {
      formData.append("image", image);
    }

    const res = await api.post(
      "/produtos/criarProdutos",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );

      const productCreated = res.data; 

      alert("Produto criado!");

     
        navigate("/produtos", {
  state: { Produtos: productCreated },
});

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Erro ao criar produto");
    }
  }
    return (
        <>
        <Nav/>

       <div className="container min-vh-100 d-flex justify-content-center align-items-center">

  <div
    className="card p-4 shadow-lg border-0 rounded-4 w-100 text-white"
    style={{
      maxWidth: "450px",
      background: "linear-gradient(135deg, #0f172a, #3b82f6)"
    }}
  >
    <h3 className="text-center mb-3">Criar Produto</h3>

    <input
      className="form-control mb-3"
      placeholder="Nome"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      className="form-control mb-3"
      placeholder="Descrição"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <input
      className="form-control mb-3"
      type="number"
      placeholder="Preço"
      value={preco}
      onChange={(e) => setPreco(e.target.value)}
    />

    <input
      className="form-control mb-3"
      type="number"
      placeholder="Estoque"
      value={stock}
      onChange={(e) => setStock(e.target.value)}
    />

    <input
      className="form-control mb-3"
      type="file"
      accept="image/*"
      onChange={(e) => setImage(e.target.files[0])}
    />

    <div className="d-flex justify-content-center">
      <button
        onClick={handleCreateProduct}
        className="btn rounded-pill text-white fw-bold px-4"
        style={{
          background: "linear-gradient(90deg, #0f204e, #60a5fa)",
          width: "140px"
        }}
      >
        Criar
      </button>
    </div>
  </div>

</div>
<Footer/>
         
        </>
    )
}

export default Criar