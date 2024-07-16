import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.webp'
import rugbyPort from '../imagenes/rugby_port.webp'
import './sports.css'
function Rugby(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}>  
    <img src={rugbyPort} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container-fluid" >
    <div className="row">
    <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  Escuelita
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes-Miercoles  Sede:Pellegrini</h6> <p>Profesores: </p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Escuelita- M8- M9- M10</strong>: 18:00hs 19:00hs(LUNES) </li>
                          <li className="list-group-item"> <strong>M11- M12- M13</strong>: 19:00hs a 20:00hs(LUNES) </li>
                          <li className="list-group-item"> <strong> Todas las categorias</strong>: 18:00hs a 19:00hs(MIERCOLES) </li>
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
                      <h6>Dias: Martes–Jueves–Viernes   Sede:Camping- Isla Regatas</h6> 
                      <p>Profesores: </p>
                      <ul className="list-group">
                        <li className="list-group-item"><strong> M14- M15</strong>: 19:00hs a 20:30hs(MARTES-JUEVES) 19:00hs a 20:00hs(VIERNES) </li>
                        <li className="list-group-item"> <strong>M16- M17</strong>: 20:00hs a 21:30hs(MARTES) 20:00hs a 22:00hs(JUEVES) 20:30 A 22:00hs(VIERNES) </li>
                      </ul>
                    </div>
                  </div>
                </div>
            <div className="accordion-item ">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Plantel superior
               </button>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                      <ul className="list-group">
                        <h6>M19 y Plantel superior Sede: Camping- Isla Regatas</h6>
                        <p> Cuerpo Tecnico: Martin Blanco- Lucas Mazzoni- Juan Ignacio Calcaterra </p>
                        <li className="list-group-item"><strong> M9- Plantel Superior</strong>: 20:30hs a 22:00hs(MARTES-JUEVES)</li>
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
export default Rugby