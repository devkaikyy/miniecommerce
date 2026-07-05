import { Link } from "react-router-dom";
import Card from '../components/Card.jsx'
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";


function Inicio() {
  return (
    <>
      <Nav/>
      <Card/>
      <Footer/>
    </>
  );
}

export default Inicio;