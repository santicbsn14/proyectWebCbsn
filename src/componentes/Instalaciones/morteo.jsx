import React from "react";
import './instalaciones.css'
import morteoPort from '../imagenes/morteo-port.webp'
import espacioMorteo from '../imagenes/morteouno.webp'
import espacioMorteoDos from '../imagenes/morteodos.webp'
import espacioMorteoTres from '../imagenes/morteotres.webp'
function Morteo(){
    return(
    <main className="mainSports" style={{marginTop:'8rem'}}>
      <img src={morteoPort} className="portadaBs col-lg-12 " alt="portadaBas" style={{marginTop:'8rem'}}/>
      <section className="container-fluid" >
    <div className="row">
      <div  class="contenedor col-lg-6 col-md-12 col-sm-12 row g-3" style={{fontSize:'12px', marginTop:'14px'}}>
        <h4 >Espacios</h4>
            <div className="mx-auto"   >
              <strong>Nuestro club de campo, ubicado en la RN9 KM 234 es un espacio que ofrece todos los servicios necesarios para pasar un día de actividades al aire libre. Con increíbles piletas, quinchos con parrillas, jardines, calesita para los más chicos, vestuarios con duchas y muchos más.</strong>
            </div>
            <div className="mx-auto" >
             <img className="fotosCamping" src={espacioMorteoTres} alt="" />
             <p className="textosPie">Contamos con una gran cantidad de mesas, rodeada de parrillas y canillas de agua, para que tengas las necesidades basicas a la hora de la comida</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioMorteoDos} alt="" />
            <p className="textosPie">Hermoso quincho abierto, que funciona como el "patio" de la cantina para que te sientes a disfrutar de los servicios de la misma</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={espacioMorteo} alt="" />
            </div>
      </div>
      

      </div>
      </section>
  </main>
    )
}
export default Morteo