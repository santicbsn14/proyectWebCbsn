import React from 'react'
import logoNuevo from '../imagenes/logoNuevo.jpg'
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
                  Minibasquet
               </button>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                        <h6>Dias: Lunes-Miercoles-Viernes  Sede:Pellegrini</h6> <p>Profesores: Juan Ignacio Calcaterra- Ramiro Rolon-Rafael Calcaterra</p>
                          <ul className="list-group">
                          <li className="list-group-item"> <strong>Mosquitos</strong> 17:30hs 18:30hs </li>
                          <li className="list-group-item"> <strong>Cebollitas-Premini</strong> 18:00hs a 19:00hs </li>
                          <li className="list-group-item"> <strong> Mini-Sub 13</strong> 19:00hs a 20:00hs </li>
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
                      <h6>Dias: Lunes–Miércoles–Viernes   Sede:Pellegrini</h6> 
                      <p>Profesores: Rafael Calcaterra-Juan Ignacio Calcaterra-Lucas Mazzoni- Martin Blanco</p>
                      <ul className="list-group">
                        <li className="list-group-item"><strong> Sub 15- Sub 17- Sub 19 Amarillo</strong>: 13:30hs a 15:30hs </li>
                        <li className="list-group-item"> <strong>Sub 17- Sub 19 Rojo</strong>: 15:30hs a 17:30hs </li>
                        <li className="list-group-item"> <strong> Sub 15-Juveniles femenino</strong>: 20:00hs a 21:00hs </li>
                        <li className="list-group-item"> <strong> 1ra Femenina y 1ra Amarilla</strong>: 21:00hs a 22:00hs </li>
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
                        <h6>Equipo profesional de basquet </h6>
                        <p> Cuerpo Tecnico: Martin Blanco- Lucas Mazzoni- Juan Ignacio Calcaterra </p>
                        <li className="list-group-item">El plantel se entrena a lo largo de la semana, en el correr de la mañana, en el"Fortunato Bonelli", ajustando sus entrenamientos en relacion a su agenda de partidos.</li>
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
                   <option value="Inferiores">Inferiores</option>
                   <option value="Sub 23">Sub 23</option>
                   <option value="Primera">Primera</option>
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