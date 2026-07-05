import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #0d1b2a, #1d4ed8)",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/inicio">
          GamerKaiky
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/inicio">
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/produtos">
                Produtos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/criar">
                Criar
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link className="btn btn-danger" to="/login">
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;