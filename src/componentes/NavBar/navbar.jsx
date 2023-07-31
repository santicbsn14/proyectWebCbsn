import React,{useState} from "react";
import escudoyletra from '../imagenes/ESCUDO Y LETRA.png'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube, faTwitter,faInstagram, faWhatsapp} from  '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'
import Autoridades from "../ElClub/autoridades";
import Basquet from "../Deportes/basquet";
import Home from '../Home/home';
import Futbol from "../Deportes/futbol";
import Contacto from "../Contacto/contacto";
import MainSports from "../Deportes/mainDeportes";
function NavBar(){
  const iconStyle = {
    fontSize: "1.4rem",
    padding: '5px',
    color: 'black'
  };

  const color = 'rgb(203, 0, 0)';

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const boxStyle = {
    backgroundColor: isHovered ? color : 'red',
  };
    return (
      <section className="navbarFull">
      <div className="container-fluid mosaico1" style={boxStyle}>
        <img src={escudoyletra} className='logo' alt="" />
        <div className="logos">
          <div className="redes">
          <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </div>
    
          <form className="d-flex buscador" role="search">
            <input className="form-control bg-dark text-light border-dark buscador2 me-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append" style={{height:'1rem' }}>
              <button className="btn btn-dark" type="submit" ><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
    
      <div className="container-fluid mosaico ">
        <nav className="navbar navbar-expand-lg " >
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to='/' element={<Home />}  className="nav-link " style={{ fontSize: '1rem', padding:'0.6rem' }}>
                <strong className="btn-dark hover" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Inicio</strong>
              </Link>
              </li>
              <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/elclub' className="nav-link" element={<Autoridades />}>
                  <strong className="btn-dark hover">El club</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link  className="nav-link" >
                  <strong className="btn-dark hover">Escuelas</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link  className="nav-link" >
                  <strong className="btn-dark hover">Instalaciones</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainSports' className="nav-link" element={<MainSports />}>
                  <strong className="btn-dark hover">Deportes</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainSports' className="nav-link" element={<MainSports />}>
                  <strong className="btn-dark hover">Area de salud</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainSports' className="nav-link" element={<MainSports />}>
                  <strong className="btn-dark hover">Talleres</strong>
                </Link>
              </li>
              <li className="nav-item yellow">
                <Link to='/contacto' className="nav-link" element={<Contacto />} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <strong className="btn-dark hover">Contacto</strong>
                </Link>
              </li>
              <li className="nav-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
  <div className="nav-item dropdown" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <a className="nav-link dropdown-toggle btn-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <strong className="btn-dark hover"><span className="navbar-toggler-icon"></span></strong>
    </a>
    <ul className="dropdown-menu">
      <section className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>EL CLUB</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Autoridades />} ><strong className="btn-dark">Autoridades</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Autoridades/>} ><strong className="btn-dark">Historia</strong></Link></li>
          </div>
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>ESCUELAS</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Basquet />} ><strong className="btn-dark">Primario</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Secundario</strong></Link></li>
          </div>
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>INSTALACIONES</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Basquet />} ><strong className="btn-dark">Club de campo</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Sede Pellegrini</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Sede Morteo</strong></Link></li>
          </div>
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>ACTIVIDADES</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Basquet />} ><strong className="btn-dark">Basquet</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Futbol</strong></Link></li>
          </div>
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>TALLERES</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Basquet />} ><strong className="btn-dark">Fotografia</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Ingles</strong></Link></li>
          </div>
          <div className="col-lg-4">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>ÁREA DE SALUD</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" element={<Basquet />} ><strong className="btn-dark">Kinesiologia</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" element={<Futbol />} ><strong className="btn-dark">Nutrición</strong></Link></li>
          </div>
        </div>
      </section>
    </ul>
  </div>
</li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    )
}
export default NavBar