import Nav from "../components/Nav"
import { useEffect, useState } from "react";
import { api } from "../services/api";
import Footer from "../components/Footer.jsx";

function Produtos() {

    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState("");
    const token = localStorage.getItem("token");

    async function handleDelete(id) {
        try {
            await api.delete(`/produtos/deletarProduto/${id}`);


            setProdutos((prev) => prev.filter((p) => p._id !== id));

            alert("Produto deletado com sucesso!");
        } catch (err) {
            console.log(err.response?.data || err.message);
            alert("Erro ao deletar produto");
        }
    }

    async function loadProducts(searchValue = "") {
        try {
            const res = await api.get("/produtos/buscarProdutos", {
                params: {
                    search: searchValue,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProdutos(res.data);
        } catch (erro) {
            console.log(erro.response?.data || erro.message);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            loadProducts(search);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);
    return (
        <>
            <Nav />
            <div className="container py-4">


                <h2 className="text-center mb-4">📦 Produtos Cadastrados</h2>


                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-6">
                        <div className="input-group shadow-sm">
                            <span className="input-group-text">🔎</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar produto..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>


                {produtos.length === 0 ? (
                    <p className="text-center text-muted">
                        {search.trim() !== ""
                            ? "Produto não encontrado."
                            : "Nenhum produto cadastrado."}
                    </p>
                ) : (
                    <div className="row g-4">

                        {produtos.map((produto) => (
                            <div key={produto._id} className="col-12 col-sm-6 col-lg-4">

                                <div
                                    className="card h-100 border-0 rounded-4 overflow-hidden"
                                    style={{
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                                        transition: "0.2s ease"
                                    }}
                                >


                                    <img
                                        src={`http://localhost:4000/uploads/${produto.image}`}
                                        alt={produto.name}
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "contain",
                                            backgroundColor: "#f8f9fa",
                                            padding: "12px"
                                        }}
                                    />


                                    <div className="card-body d-flex flex-column">

                                        <h5 className="fw-bold">{produto.name}</h5>

                                        <p className="text-muted small flex-grow-1">
                                            {produto.description}
                                        </p>

                                        <p className="mb-1 fw-bold">
                                            💰 R$ {produto.preco}
                                        </p>

                                        <p className="mb-3">
                                            📦 Estoque: {produto.stock}
                                        </p>

                                        {/* BOTÃO */}
                                        <button
                                            onClick={() => handleDelete(produto._id)}
                                            className="btn btn-danger btn-sm w-100 rounded-pill"
                                        >
                                            🗑 Deletar
                                        </button>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Produtos