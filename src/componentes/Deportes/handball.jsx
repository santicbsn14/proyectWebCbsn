import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.webp'
import handballPort from '../imagenes/handball_port.webp'
import './sports.css'
function Handball(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}>  
    <img src={handballPort} className="portadaBs col-lg-12 " alt="portadaBas" />
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
                        <h6>Dias: Lunes-Miercoles-Viernes  Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Escuelita- Mini mixto</strong>: 18:00hs a 19:00hs </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Inferiores
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes-Jueves  Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Infantil- Menores</strong>: 19:00hs a 20:00hs(LUNES-MIERCOLES) 20:00hs a 21:00hs(VIERNES) </li>
                          <li className="list-group-item"> <strong>Cadetes- Juveniles masculino</strong>:20:00hs a 21:00hs (LUNES-MIERCOLES) 19:00hs a 20:00hs(VIERNES) </li>
                          <li className="list-group-item"> <strong>Cadetes- Juveniles femenino</strong>:17:00hs a 18:00hs</li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Mayores
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes-Jueves  Sede:Pellegrini</h6> <p>Profesores: ------</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Primera Masculino</strong>: 21:00hs a 22:00hs </li>
                          <li className="list-group-item"> <strong>Primera Femenino</strong>: 21:00hs a 22:00hs(LUNES-MIERCOLES) 20:00hs a 21:00hs(VIERNES) </li>
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
                <option value="Zumba y ritmos">Escuelita</option>
                <option value="Zumba y ritmos">Inferiores</option>
                <option value="Zumba y ritmos">Plantel Superior</option>
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
export default Handball