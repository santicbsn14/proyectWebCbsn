import React from "react";
import './sports.css'
import portZumba from '../imagenes/zumba-port.webp'
import logoNuevo from '../imagenes/logoNuevo.jpg'
function Zumba(){
    return(
    <main className="mainSports" style={{marginTop:'8rem'}}>
      <img src={portZumba} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container-fluid" >
    <div className="row">
      <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Zumba y ritmos
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes-Miercoles Sede:Pellegrini</h6> <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>A partir de 15 años</strong> 18:00hs 19:00hs </li>
                        </ul>
                      </div>
                  </div>
            </div>
      </div>

      <form className="col-lg-6 row g-3 formulario mx-auto">
        <h4>Contactar con profesores</h4>
            <p>¡Obtendrá una respuesta en la dirección de correo electrónico que ingrese!</p>
             <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{ height: '64px' }} id="inputAddress2" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="inputState" className="form-label">Categoría</label>
              <select id="inputState" className="form-select">
                <option value="Zumba y ritmos">Zumba y ritmos</option>
              </select>
            </div>
           <div className="col-12">
             <button type="submit" id="probando" className="btn btn-primary">Enviar</button>
            </div>
      </form>
    </div> 
  </section>
  </main>
    )
}
export default Zumba