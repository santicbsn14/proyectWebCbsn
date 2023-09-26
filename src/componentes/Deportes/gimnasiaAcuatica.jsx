import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.jpg'
import gimnasiaAcuaticaPort from '../imagenes/gimnasiaacuaticaport.webp'
import './sports.css'
function GimnasiaAcuatica(){
    return(
    <main className='mainSports' style={{marginTop:'8rem'}}> 
    <img src={gimnasiaAcuaticaPort} className="portadaBs col-lg-12 " alt="portadaBas" />
    <section className="container" >
    <div className="row">
      <div className="accordion col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div className="accordion-item ">
               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  INFANTILES
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Martes-Viernes  Sede:Pellegrini</h6> <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>2017/2018:</strong> 18:00hs 19:00hs </li>
                          <li className="list-group-item"> <strong>2014:</strong> 19:00hs a 20:00hs </li>
                          <li className="list-group-item"> <strong> 2012:</strong> 20:00hs a 21:00hs </li>
                        </ul>
                        <h6>Dias: Jueves  Sede:Pellegrini</h6>  <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                        <ul className="list-group">
                          <li className="list-group-item"> <strong>2015/2016:</strong> 18:00hs a 19:00hs </li>
                          <li className="list-group-item"> <strong>2013:</strong> 19:00hs a 20:00hs </li>
                          <li className="list-group-item"> <strong>2011:</strong> 20:00hs a 21:00hs </li>
                        </ul>
                        <h6>Dias: Martes-Viernes  Sede:Morteo</h6>  <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                        <ul className="list-group">
                          <li className="list-group-item"> <strong>2015/2016:</strong> 18:00hs a 19:00hs </li>
                          <li className="list-group-item"> <strong>2013:</strong> 19:00hs a 20:00hs </li>
                          <li className="list-group-item"> <strong>2011:</strong> 20:00hs a 21:00hs </li>
                        </ul>
                        <h6>Dias: Jueves  Sede:Morteo</h6> <p>Profesores: Adrian Demichelis-Marcos Nardone-Diego Pontieri</p>
                        <ul className="list-group">
                          <li className="list-group-item"> <strong>2014:</strong> 19:00hs a 20:00hs </li>
                          <li className="list-group-item"> <strong>2012:</strong> 20:00hs a 21:00hs </li>
                          <p className="text-center"> <strong>Cuota deportiva + social: $2600 </strong></p>
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
                      <h6>Dias: Días: Lunes–Martes –Miércoles–Jueves –Viernes (1 día de descanso)  Sede:Camping</h6> 
                      <p>Profesores: Marcelo Ocanto-Jose Barraza-Ricardo Barrano-Fernando Lagorio-Daniel Huber-Roberto Cerino</p>
                      <ul className="list-group">
                        <li className="list-group-item"></li>
                        <li className="list-group-item"> <strong> 2010/2009</strong>: 18:00hs a 19:30hs </li>
                        <li className="list-group-item"> <strong> 2008/2007</strong>: 18:00hs a 19:30hs </li>
                        <li className="list-group-item"> <strong> 5ta/Sub23</strong>: 19:30hs a 21:00hs </li>
                        <li className="list-group-item"> <strong>Cuota deportiva + social: $3050 </strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
            <div className="accordion-item ">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Primera
               </button>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                      <ul className="list-group">
                        <h6>Dias: Días: lunes–Martes –Miércoles–Jueves –Viernes (1 día de descanso)  Sede:Camping</h6>
                        <p> Cuerpo Tecnico: Daniel Huber- Fernando Lagorio- Jose Feroci </p>
                        <li className="list-group-item"> <strong>1era:</strong> 19:30hs a 21:00hs</li>
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
      <option value="2007/2008">2007/2008</option>
      <option value="2009/2010">2009/2010</option>
      <option value="Quinta">Quinta</option>
      <option value="Sub 23">Sub 23</option>
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
export default GimnasiaAcuatica