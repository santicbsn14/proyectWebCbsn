import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.jpg'
import gimnasiaArtisticaPort from '../imagenes/gimnasia-artistica-port.webp'
import './sports.css'
function GimnasiaArtistica(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}> 
    <img src={gimnasiaArtisticaPort} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container-fluid" >
    <div className="row">
      <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Jardin- Escuelita
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes a Jueves  Sede:Pellegrini</h6> <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Jardin (4 a 6 años)</strong>: 17:30hs a 18:15hs(MARTES-JUEVES) </li>
                          <li className="list-group-item"> <strong>Escuelita(6 a 8 años)</strong>: 18:15hs a 19:15hs(LUNES A JUEVES) </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> 
                  Intermedio
               </button>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Martes- Jueves  Sede:Pellegrini</h6> <p>Profesores: </p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>9 de años en adelante</strong>: 19:15hs a 20:30hs(MARTES-JUEVES) </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"> 
                  Grupo federativo
               </button>
                  <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes- Miercoles- Viernes  Sede:Pellegrini</h6> <p>Profesores: </p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Grupo federativo</strong>: 19:15hs a 20:30hs(LUNES-MIERCOLES) 18:15hs a 20:30hs(VIERNES) </li>
                          <li className="list-group-item"> <strong>Pre equipo</strong>: 19:15hs a 20:30hs(LUNES-MIERCOLES)</li>
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
                <option value="Zumba y ritmos">Todas las edades</option>
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
export default GimnasiaArtistica
