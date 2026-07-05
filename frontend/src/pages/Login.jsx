import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import imgLogin from "../assets/pc-login.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [erro, setErro]=useState("")

  async function logar() {
    setMsg("");

    try {
      const response = await api.post("/usuario/login", {
        email,
        password,
      });

      setMsg(response.data.message);

      setTimeout(() => {
        navigate("/inicio");
      }, 1000);

    } catch (erro) {
      setErro(
        erro.response?.data?.erro ||
        "Erro ao conectar com o servidor."
      )
      setTimeout(()=>{
        setErro("")
      },2000)
    }
    
  }

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex flex-column justify-content-start pt-5">

      
      <h2 className="text-center mb-5">Login</h2>


      <div className="row align-items-center justify-content-center w-100">

       
        <div className="col-12 col-md-4 mb-3 mb-md-0">

          <div className="card p-4 shadow">

            {msg && <div className="alert alert-info p-2">{msg}</div>}
            {erro && <div className="alert alert-danger p-2">{erro}</div>}

            <label className="fw-bold">Email</label>
            <input
              className="form-control form-control-sm mb-2"
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => {
                setEmail(e.target.value);
                setMsg("");
              }}
            />

            <label className="fw-bold">Senha</label>
            <input
              className="form-control form-control-sm mb-3"
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
                setMsg("");
              }}
            />
             
             <div className="d-flex justify-content-center">

            <button
              className="btn btn-sm px-4 fw-bold text-white"
              style={{
                background: "linear-gradient(90deg, #03193b, #1b08ea)",
                border: "none",
              }}
              onClick={logar}
            >
              Entrar
            </button>
             </div>

             <div className="text-center mt-3">
  <span className="text-muted">Não tem uma conta? </span>
  <Link
    to="/"
    className="text-decoration-none fw-bold"
    style={{ color: "#1b08ea" }}
  >
    Cadastre-se
  </Link>
</div>

          </div>
        </div>

        <div className="col-12 col-md-5 d-flex justify-content-center">
          <img
            src={imgLogin}
            alt="login"
            className="img-fluid"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Login;