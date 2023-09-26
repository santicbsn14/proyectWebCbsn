import React from "react";
import './footer.css';
import escudoyletra from '../imagenes/escudo_y_letra.png'
import telefono from "../imagenes/0336-4454540.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube, faInstagram, faWhatsapp} from  '@fortawesome/free-brands-svg-icons'
function Footer(){
  const iconStyle = {
    fontSize: "2rem",
    padding : "1px"
  };
    return(
        <footer>
        <section className="container-fluid my-0 ">
          <div className="row">
            <div className="col-lg-4 logofooter">
            <img src={escudoyletra} className="logoFooter" alt="logofooter"/>   </div>
            <div className="col-lg-4  textofooter">
              <p style={{fontSize:'0.8rem'}}>San Nicolas de los Arroyos</p>
              <p style={{fontSize:'0.8rem'}}>Direccion: Carlos Pellegrini 476</p>
              <p style={{fontSize:'0.8rem'}}>Sede Club de Campo: Km 234, RN9</p>
              <p style={{fontSize:'0.8rem'}}>Sede Morteo: Av. Morteo 20</p>
              <p style={{fontSize:'0.8rem'}}>Provinicia Buenos Aires</p>
              <p style={{fontSize:'0.8rem'}}><a href="https://goo.gl/maps/bjsvYhEcEAZkEGgr6">Ver mapa</a></p>
              </div>
            <div className="col-lg-4 iconos">
              <div className="telefono"><img src={telefono}  className="telefono" alt=""/></div>
              {/* <div className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} style={iconStyle} /><strong >+54 336 432-2466</strong></div> */}
               <div className="iconosRedes">
               {/* <p >Encontranos en nuestras redes sociales:</p> */}
           <a href='https://api.whatsapp.com/send?phone=%2B543364322466&text=' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="iconosRedes" icon={faWhatsapp} style={iconStyle}  /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconosRedes"  icon={faYoutube} style={iconStyle} /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconosRedes"  icon={faFacebook} style={iconStyle} /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconosRedes"  icon={faInstagram} style={iconStyle} /> </a>
               </div>
            </div>
          </div>
        </section>
        <div className="derechos " >
          <p className="text-center"><strong>CLUB BELGRANO SAN NICOLAS 2022</strong>\ Diseño y Desarrolo Santiago Viale</p>
        </div>
      </footer>
    )
}
export default Footer