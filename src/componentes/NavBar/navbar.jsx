import React,{useState} from "react";
import escudoyletra from '../imagenes/escudo_y_letra.png'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube, faTwitter,faInstagram, faWhatsapp} from  '@fortawesome/free-brands-svg-icons';
import { faSearch } from  '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom'

function NavBar(){
  const iconStyle = {
    fontSize: "1.12rem",
    padding: '4px',
    color: 'black'
  };
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([]);

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

  const redirectionResults =  (word)=>{
    navigate(`/newsRequests/${word}`)
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const input = form.querySelector("input[type=search]");

    const searchTerm = input.value;

   redirectionResults(searchTerm)
  };

    return (

      
        <section  className="navbarFull">
            <div className="container-fluid mosaicoUno" style={boxStyle}>
                <img src={escudoyletra} className='logo' alt="" />
                <div className="logos">
                    <div className="redes">
                        <FontAwesomeIcon className="logoRedes" icon={faWhatsapp} style={iconStyle} />
                        <FontAwesomeIcon className="logoRedes" icon={faFacebook} style={iconStyle} />
                        <FontAwesomeIcon className="logoRedes" icon={faYoutube} style={iconStyle} />
                        <FontAwesomeIcon className="logoRedes" icon={faTwitter} style={iconStyle} />
                        <FontAwesomeIcon className="logoRedes" icon={faInstagram} style={iconStyle} />
                    </div>
                <form className="d-flex buscador" onSubmit={handleFormSubmit} role="search" >
                    <input className="form-control bg-dark text-light border-dark buscador2 me-2" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append" style={{ height: "0.8rem" }}>
                        <button className="btn btn-dark" type="submit"><span><FontAwesomeIcon  className="logoRedes" icon={faSearch} style={{padding: '4px',color: 'white'}} /></span></button>
                    </div>
                </form>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <ul  className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/'   className="nav-link " >
                <strong className="btn-dark hover" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Inicio</strong>
              </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/mainElClub' className="nav-link" id="submenuElClub" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">El club</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuElClub" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                      <Link to="/autoridades" className="dropdown-item">Autoridades</Link>
                      <Link to="/historia" className="dropdown-item">Historia</Link>
                  </div>
            </li>
            <li className="nav-item yellow d-none d-lg-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainElClub' className="nav-link">
                    <strong className="btn-dark hover">El club</strong>
                </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/mainEscuelas' className="nav-link" id="submenuElClub" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">Escuelas</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuElClub" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                      <Link to="/jardin" className="dropdown-item">Jardin</Link>
                      <Link to="/primaria" className="dropdown-item">Escuela Primaria</Link>
                      <Link to="/historia" className="dropdown-item">Escuela Secundaria</Link>
                  </div>
            </li>
            <li className="nav-item yellow d-none d-lg-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/mainEscuelas'  className="nav-link" >
                  <strong className="btn-dark hover">Escuelas</strong>
                </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/mainInstalaciones' className="nav-link" id="submenuElClub" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">Instalaciones</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuElClub" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                      <Link to="/sedePellegrini" className="dropdown-item">Sede Pellegrini</Link>
                      <Link to="/camping" className="dropdown-item">Camping</Link>
                  </div>
            </li>
            <li className="nav-item yellow d-none d-lg-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/mainInstalaciones' className="nav-link">
                  <strong className="btn-dark hover">Instalaciones</strong>
                </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/mainDeportes' className="nav-link" id="submenuElClub" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">Deportes</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuElClub" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                      <Link to="/basquet" className="dropdown-item">Basquet</Link>
                      <Link to="/ajedrez" className="dropdown-item">Ajedrez</Link>
                      <Link to="/futbol" className="dropdown-item">Futbol</Link>
                      <Link to="/gimnasiaAcuatica" className="dropdown-item">Gimnasia Acuatica</Link>
                      <Link to="/gimnasiaArtistica" className="dropdown-item">Gimnasia Artistica</Link>
                      <Link to="/EFI" className="dropdown-item">EFI</Link>
                      <Link to="/futsal" className="dropdown-item">Futsal</Link>
                  </div>
            </li>
            <li className="nav-item yellow d-none d-lg-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/mainSports' className="nav-link" >
                  <strong className="btn-dark hover">Deportes</strong>
                </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/mainAreadesalud' className="nav-link" id="submenuElClub" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">Area de salud</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuElClub" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                      <Link to="/autoridades" className="dropdown-item">Kinesiologia</Link>
                      <Link to="/historia" className="dropdown-item">Nutricion</Link>
                  </div>
            </li>
            <li className="nav-item yellow d-none d-lg-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/mainAreaSalud' className="nav-link" >
                  <strong className="btn-dark hover">Area de salud</strong>
                </Link>
            </li>
            <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to='/contacto' className="nav-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <strong className="btn-dark hover">Contacto</strong>
                </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link to='/' className="nav-link" id="submenuBuscador" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong className="btn-dark hover">Buscar novedades</strong>
              </Link>
                  <div className="dropdown-menu" aria-labelledby="submenuBuscador" style={{ backgroundColor: 'rgb(203, 0 , 0)' }}>
                  <form className="d-flex " onSubmit={handleFormSubmit} role="search" >
                    <input className="form-control bg-dark text-light border-dark  me-2" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append" style={{ height: "0.4rem" }}>
                        <button className="btn btn-dark" type="submit"><span><FontAwesomeIcon   icon={faSearch} style={{padding: '2px',color: 'white'}} /></span></button>
                    </div>
                </form>
                  </div>
            </li>
            </ul>
          
        </div>
      </div>
    </nav>
    
        </section>
    )    

    
    
}
export default NavBar