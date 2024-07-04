import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.jpg'
import natatorioPort from '../imagenes/natacion-port.webp'
import './sports.css'
function Natacion(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}>  
    <img src={natatorioPort} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container-fluid" >
    <div className="row">
      <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Ambientacion
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Martes-Miercoles-Jueves-Viernes  Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>4 años- 5 años</strong>: 17:30hs a 18:15hs(MARTES-JUEVES) 18:00hs a 18:45hs(MIERCOLES-VIERNES)  </li>
                          <li className="list-group-item"> <strong>3 años- 4 años</strong>: 17:15hs a 18:00hs </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> 
                  Enseñanza
               </button>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Martes-Jueves(de mañana) Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>9 años a 12 años</strong>: 09:30hs a 10:15hs(MARTES-JUEVES) 18:00hs a 18:45hs(MIERCOLES-VIERNES)  </li>
                          <li className="list-group-item"> <strong>6 años a 9 años</strong>: 10:15hs a 11:00hs </li>
                        </ul>
                        <h6>Dias: Lunesa a Viernes(de tarde) Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>6 años a 8 años</strong>: 17:30hs a 18:15hs(LUNES-MIERCOLES) </li>
                          <li className="list-group-item"> <strong>8 años a 10 años</strong>: 18:15hs a 19:00hs(LUNES-MARTES-MIERCOLES-JUEVES) 18:45hs a 19:30hs(VIERNES) </li>
                          <li className="list-group-item"> <strong>10 años a 12 años</strong>: 19:00hs a 19:45hs(LUNES-MIERCOLES) </li>
                          <li className="list-group-item"> <strong>13 años en adelante</strong>: 16:30hs a 17:30hs(LUNES-MIERCOLES) 17:00hs a 18:00hs(VIERNES) </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"> 
                  Equipo
               </button>
                  <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes a Viernes Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Equipo </strong>: 15:00hs a 17:00hs</li>
                          <li className="list-group-item"> <strong>Pre equipo</strong>: 18:00hs a 19:30hs(LUNES-MARTES-JUEVES)</li>
                          <li className="list-group-item"> <strong>Master</strong>: 19:30hs a 21:00hs(LUNES-MARTES-JUEVES)</li>
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
                <option value="Zumba y ritmos">Ambientacion</option>
                <option value="Zumba y ritmos">Enseñanza</option>
                <option value="Zumba y ritmos">Equipo</option>
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
export default Natacion