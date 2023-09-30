import React from "react";
import './escuelas.css'
import portPrimaria from '../imagenes/primaria_port.webp'
import primariaUno from '../imagenes/primariauno.webp'
import primariaDos from '../imagenes/primariados.webp'
import primariaTres from '../imagenes/primariatres.webp'
function Primaria(){
    return(
    <main className="mainSports" style={{marginTop:'8rem'}}>
      <img src={portPrimaria} className="portadaBs col-lg-12 " alt="portadaBas" style={{paddingTop: '10rem' }}/>
    <section className="container-fluid" >
    <div className="row">
    <div  className=" contenedor col-lg-6 row g-3" style={{fontSize:'12px', marginTop:'14px'}}>
        <h4 >Espacios</h4>
            <div className="mx-auto"   >
              <strong>Nuestro club de campo, ubicado en la RN9 KM 234 es un espacio que ofrece todos los servicios necesarios para pasar un día de actividades al aire libre. Con increíbles piletas, quinchos con parrillas, jardines, calesita para los más chicos, vestuarios con duchas y muchos más.</strong>
            </div>
            <div className="mx-auto" >
             <img className="fotosCamping" src={primariaUno} alt="" />
             <p className="textosPie">El gimnasio "Fortunato Bonelli" donde se realizan practicas de basquet como tambien voley</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={primariaDos} alt="" />
            <p className="textosPie">Estadio cerrado "Socios Fundadores" en el cual se llevan a cabo las practicas de deportes como el Handball, Patin y Futsal</p>
            </div>
            <div className="mx-auto" >
            <img className="fotosCamping" src={primariaTres } alt="" />
            <p  className="textosPie">Quincho cerrado, inagurado en el año 2022, que cuenta con la mayoria de los equipos de cocina (dos hornos, hornallas, 3 o mas parrillas, etc), y dos televisores.</p>
            </div>
      </div>
      
      
      <form className=" col-lg-6 row g-3 formulario mx-auto" >
            <h4>Contactar Para Reservas</h4>
            <p>¡Obtendra una respuesta en la direccion del correo electronico que ingrese!</p>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Nombre</label>
              <input type="email" className="form-control" id="inputEmail4"/> 
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Email</label>
              <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{height: '80px'}} id="inputAddress2"/>
            </div>
            <div className="col-lg-12">
              <label for="inputState" className="form-label">Categoria</label>
              <select id="inputState" className="form-select">
                <option selected>Futbol Infantil</option>
                <option>2007/2008</option>
                <option>2009/2010</option>
                <option>Quinta</option>
                <option>Sub 23</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" id="probando" onclick="mensajeenviado()" className="btn btn-primary">Enviar</button>
            </div>
      </form>
          
            </div> 

  </section>
  </main>
    )
}
export default Primaria