import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.webp'
import futsalPort from '../imagenes/futsal_port.webp'
import './sports.css'
function Futbol(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}> 
    <img src={futsalPort} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container-fluid" >
      <div className="row">
        <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Infantiles
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Martes-Jueves-Viernes  Sede:Pellegrini-Morteo-Camping</h6> <p>Profesores: -----------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>2019- 2018</strong>: 18:00hs 19:00hs(MARTES-JUEVES: PELLEGRINI) </li>
                          <li className="list-group-item"> <strong>2017</strong>: 18:00hs a 19:00hs(MARTES-VIERNES: MORTEO -- JUEVES: PELLEGRINI) </li>
                          <li className="list-group-item"> <strong>2016</strong>: 19:00hs a 20:00hs (JUEVES-VIERNES: MORTEO -- MARTES: PELLEGRINI) </li>
                          <li className="list-group-item"> <strong>2015</strong>: 19:00hs a 20:00hs (MARTES-VIERNES: MORTEO -- JUEVES: PELLEGRINI)</li>
                          <li className="list-group-item"> <strong>2014</strong>: 20:00hs a 21:00hs (JUEVES-VIERNES: MORTEO -- MARTES: PELLEGRINI)</li>
                          <li className="list-group-item"> <strong>2013</strong>: 20:00hs a 21:00hs (MARTES: MORTEO -- JUEVES: PELLEGRINI -- VIERNES: CAMPING)</li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Inferiores
               </button>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                      <h6>Dias: Lunes a Jueves   Sede:Camping</h6> 
                      <p>Profesores: </p>
                      <ul className="list-group">
                        <li className="list-group-item"><strong>2007 a 2012</strong>: 18:00hs a 19:30hs </li>
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
                   <option value="Futbol Infantil">Futbol Infantil</option>
                   <option value="Futbol Infantil">Inferiores</option>
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
export default Futbol