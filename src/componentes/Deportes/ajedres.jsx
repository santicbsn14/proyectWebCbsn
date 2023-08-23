import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.jpg'
import ajedrezPort from '../imagenes/ajedrez_port.jpg'
import './sports.css'
function Ajedrez(){
    return(
    <main className='mainSports'> 
    <img src={ajedrezPort} className="portadaBs col-lg-12 " alt="portadaBas" style={{paddingTop: '12rem' }}/>
      <section className="container" >
        <div className="row">
          <div class="accordion col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>
            <div class="accordion-item ">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                  INFANTILES
               </button>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <img src={logoNuevo} style={{height: '55px', width:'95px'}} className="mx-auto" alt="logo"/>
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
                      <img src={logoNuevo} style={{height: '55px', width:'95px'}} className="mx-auto" alt="logo"/>
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
                      <img src={logoNuevo} style={{height: '55px', width:'95px'}} className="mx-auto" alt="logo"/>
                      <ul className="list-group">
                        <h6>Dias: Días: lunes–Martes –Miércoles–Jueves –Viernes (1 día de descanso)  Sede:Camping</h6>
                        <p> Cuerpo Tecnico: Daniel Huber- Fernando Lagorio- Jose Feroci </p>
                        <li className="list-group-item"> <strong>1era:</strong> 19:30hs a 21:00hs</li>
                      </ul>
                    </div>
                  </div>
                </div>
          </div>

    <form className=" col-lg-6 row g-3 formulario mx-auto">
      <h4>Contactar con profesores</h4>
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
export default Ajedrez