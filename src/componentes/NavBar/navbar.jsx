import React,{useState} from "react";
import escudoyletra from '../imagenes/escudo_y_letra.png'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube, faTwitter,faInstagram, faWhatsapp} from  '@fortawesome/free-brands-svg-icons';
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
      <section className="navbarFull">
      <div className="container-fluid mosaico1" style={boxStyle}>
        <img src={escudoyletra} className='logo' alt="" />
        <div className="logos">
          <div className="redes">
          <FontAwesomeIcon className="logoRedes" icon={faWhatsapp} style={iconStyle} />
            <FontAwesomeIcon className="logoRedes" icon={faFacebook} style={iconStyle} />
            <FontAwesomeIcon className="logoRedes"  icon={faYoutube} style={iconStyle} />
            <FontAwesomeIcon className="logoRedes"  icon={faTwitter} style={iconStyle} />
            <FontAwesomeIcon  className="logoRedes" icon={faInstagram} style={iconStyle} />
          </div>
          <form className="d-flex buscador" role="search" onSubmit={handleFormSubmit}>
            <input className="form-control bg-dark text-light border-dark buscador2 me-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append" style={{ height: "0.8rem" }}>
              <button className="btn btn-dark" type="submit"><i className="fa fa-search"> </i></button>
            </div>
          </form>
           </div>
        </div>
    
      <div className="container-fluid mosaico ">
        <nav className="navbar navbar-expand-lg " >
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            
            <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to='/'   className="nav-link " style={{ fontSize: '0.8rem', padding:'0.6rem' }}>
                <strong className="btn-dark hover" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Inicio</strong>
              </Link>
              </li>
              <li className="nav-item yellow " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainElCLub' className="nav-link" >
                  <strong className="btn-dark hover">El club</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainEscuelas'  className="nav-link" >
                  <strong className="btn-dark hover">Escuelas</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to='/mainInstalaciones' className="nav-link">
                  <strong className="btn-dark hover">Instalaciones</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainSports' className="nav-link" >
                  <strong className="btn-dark hover">Deportes</strong>
                </Link>
              </li>
              <li className="nav-item yellow" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Link to='/mainSports' className="nav-link" >
                  <strong className="btn-dark hover">Area de salud</strong>
                </Link>
              </li>
              <li className="nav-item yellow">
                <Link to='/contacto' className="nav-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>EL CLUB</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark"  ><strong className="btn-dark">Autoridades</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark"  ><strong className="btn-dark">Historia</strong></Link></li>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>ESCUELAS</strong></h5>
            <li><Link to='/jardin' className="nav-link dropdown-item btn-dark" ><strong className="btn-dark">Jardin</strong></Link></li>
            <li><Link to='/primaria' className="nav-link dropdown-item btn-dark" ><strong className="btn-dark">Primario</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark"  ><strong className="btn-dark">Secundario</strong></Link></li>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>INSTALACIONES</strong></h5>
            <li><Link to='/camping' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Club de campo</strong></Link></li>
            <li><Link to='/sedePellegrini' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Sede Pellegrini</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Sede Morteo</strong></Link></li>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>DEPORTES</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Basquet</strong></Link></li>
            <li><Link to='/ajedrez' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Ajedrez</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Futbol</strong></Link></li>
            <li><Link to='/gimnasiaAcuatica' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Gimnasia Acuatica</strong></Link></li>
            <li><Link to='/gimnasiaArtistica' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Gimnasia Artistica</strong></Link></li>
            <li><Link to='/EFI' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">EFI</strong></Link></li>
            <li><Link to='/futsal' className="nav-link dropdown-item btn-dark"><strong className="btn-dark">Futsal</strong></Link></li>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <h5 className="mx-auto"><strong style={{ color: 'yellow' }}>ÁREA DE SALUD</strong></h5>
            <li><Link to='/basquet' className="nav-link dropdown-item btn-dark" ><strong className="btn-dark">Kinesiologia</strong></Link></li>
            <li><Link to='/futbol' className="nav-link dropdown-item btn-dark" ><strong className="btn-dark">Nutrición</strong></Link></li>
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