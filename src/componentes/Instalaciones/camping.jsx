import React from "react";
import './instalaciones.css'
import portCamping from '../imagenes/camping4.jpg'
import espacioCamping from '../imagenes/foto-camping0.webp'
import espacioCampingDos from '../imagenes/foto-camping1.webp'
import espacioCampingTres from '../imagenes/foto-camping2.webp'
import espacioCampingCuatro from '../imagenes/quinchocamp.webp'
import espacioCampingCinco from '../imagenes/quinchocampdos.webp'
import espacioCampingSeis from '../imagenes/padelcamp.webp'
import espacioCampingSiete from '../imagenes/basquetcamp.webp'
import { sendEmail } from "../MockService/newsRepository";
function Camping(){
  
  function enviarFormulario(event) {
    event.preventDefault();
    
    
    const nombre = document.getElementById("inputEmail4").value;
    const email = document.getElementById("inputPassword4").value;
    const mensaje = document.getElementById("inputAddress2").value;
    const motivo = document.getElementById("inputState").value;
  
    
    sendEmail(nombre, email, mensaje, motivo);
  }
    return(
    <main className="mainSports" style={{marginTop:'8rem'}}>
      <img src={portCamping} className="portadaBs col-lg-12 " alt="portadaBas" style={{marginTop:'8rem'}}/>
      <section className="container-fluid" >
    <div className="row">
      <div  class="contenedor col-lg-6 col-md-12 col-sm-12 row g-3" style={{fontSize:'12px', marginTop:'14px'}}>
        <h4 >Espacios</h4>
            <div className="mx-auto"   >
              <strong>Nuestro club de campo, ubicado en la RN9 KM 234 es un espacio que ofrece todos los servicios necesarios para pasar un día de actividades al aire libre. Con increíbles piletas, quinchos con parrillas, jardines, calesita para los más chicos, vestuarios con duchas y muchos más.</strong>
            </div>
            <div className="mx-auto" >
             <img className="fotosCamping" src={espacioCamping} alt="" />
             <p className="textosPie">Contamos con una gran cantidad de mesas, rodeada de parrillas y canillas de agua, para que tengas las necesidades basicas a la hora de la comida</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingDos} alt="" />
            <p className="textosPie">Hermoso quincho abierto, que funciona como el "patio" de la cantina para que te sientes a disfrutar de los servicios de la misma</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingTres} alt="" />
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingCuatro} alt="" />
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingCinco} alt="" />
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingSeis} alt="" />
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioCampingSiete} alt="" />
            </div>
      </div>
      
      
      <form className=" col-lg-6 row g-3 formulario mx-auto" onSubmit={enviarFormulario} >
            <h4>Contactar Para Reservas</h4>
            <p>¡Obtendra una respuesta en la direccion del correo electronico que ingrese!</p>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputEmail4"/> 
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{height: '80px'}} id="inputAddress2"/>
            </div>
            <div className="col-lg-12">
              <label for="inputState" className="form-label">Motivo de reunion</label>
              <select id="inputState" className="form-select">
                <option selected>Cumpleaños</option>
                <option>Social</option>
                <option>Laboral</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" id="probando"  className="btn btn-primary">Enviar</button>
            </div>
      </form>
      </div>
      </section>
  </main>
    )
}
export default Camping