import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [erro, setErro]=useState("")

  const navigate = useNavigate();

  async function cadastrar() {
    try {
      const response = await api.post("/usuario/cadastro", {
        name,
        email,
        password,
      });

      setMsg(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (erro) {
      setErro(erro.response?.data?.erro || "Erro ao conectar");

      setTimeout(() => {
        setErro("");
      }, 2000);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">

      <div className="w-100" style={{ maxWidth: "420px" }}>

        <h2 className="text-center mb-4">Cadastre-se</h2>

        <div className="card p-3 p-md-4 shadow">

          {msg && <div className="alert alert-info p-2">{msg}</div>}
          {erro && <div className="alert alert-danger p-2">{erro}</div>}

          <label className="fw-bold">Nome</label>
          <input
            className="form-control form-control-sm mb-2"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="fw-bold">Email</label>
          <input
            className="form-control form-control-sm mb-2"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="fw-bold">Senha</label>
          <input
            className="form-control form-control-sm mb-3"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-sm px-4 fw-bold text-white"
              style={{
                background: "linear-gradient(90deg, #03193b, #1b08ea)",
                border: "none",
              }}
              onClick={cadastrar}
            >
              Cadastrar
            </button>
          </div>

            <div className="text-center mt-3">
  <span className="text-muted">Já tem uma conta? </span>
  <Link
    to="/login"
    className="text-decoration-none fw-bold"
    style={{ color: "#1b08ea" }}
  >
    Faça login
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}

export default Cadastro;