import { useNavigate } from "react-router-dom";
import imgPs from "../assets/PS2-Versions.png";

function Card() {
  const navigate = useNavigate();

  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        {/* Texto */}
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3">Página Inicial</h1>

          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, qui
            illum eveniet dolores nam autem quod earum repellat, adipisci
            reiciendis fugit reprehenderit.
          </p>

          <button
            style={{
                background: "linear-gradient(90deg, #03193b, #1b08ea)",
                border: "none",
              }}
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/criar")}
          >
            Criar
          </button>
        </div>

       
        <div className="col-lg-6 text-center">
          <img
            src={imgPs}
            alt="PS2"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
}

export default Card;