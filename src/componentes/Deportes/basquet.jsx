import React from "react";
import './sports.css'
import portBasquet from '../imagenes/port-basquet.webp'
import logoNuevo from '../imagenes/logoNuevo.jpg'
function Basquet(){
    return(
    <main className="mainSports" style={{marginTop:'8rem'}}>
      <img src={portBasquet} className="portadaBs col-lg-12 " alt="portadaBas" />
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
                          <li className="list-group-item"> <strong>Mosquitos</strong> 17:30hs 18:15hs </li>
                          <li className="list-group-item"> <strong>Cebollitas-Premini</strong> 18:00hs a 19:00hs </li>
                          <li className="list-group-item"> <strong> Mini-Sub 13</strong> 19:00hs a 20:00hs </li>
                        </ul>
                      </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Inferiores y Primera
               </button>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                      <h6>Dias: Lunes–Miércoles–Viernes   Sede:Pellegrini</h6> 
                      <p>Profesores: Rafael Calcaterra-Juan Ignacio Calcaterra-Lucas Mazzoni- Martin Blanco</p>
                      <ul className="list-group">
                        <li className="list-group-item"><strong> Sub 17- Sub 21 Amarillo</strong>: 14:30hs a 16:00hs </li>
                        <li className="list-group-item"> <strong>Sub 17- Sub 21 Rojo</strong>: 16:00hs a 17:30hs </li>
                        <li className="list-group-item"> <strong> Sub 15 amarillo y rojo- Sub 14 femenino</strong>: 20:00hs a 21:00hs </li>
                        <li className="list-group-item"> <strong> 1ra Femenina</strong>: 21:00hs a 22:00hs </li>
                        <li className="list-group-item"> <strong> 1ra amarillo</strong>: 22:00hs a 23:00hs </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className="accordion-item ">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Maxi basquet
               </button>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <img src={logoNuevo} style={{height: '44px', width:'76px'}} className="mx-auto" alt="logo"/>
                      <ul className="list-group">
                        <h6>Dias: Martes-Jueves Sede: Pellegrini</h6>
                        <p> Cuerpo Tecnico: ------ </p>
                        <li className="list-group-item"> <strong> Maxi femenino y masculino</strong>: 21:00hs a 22:00hs </li>
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
                <option value="Zumba y ritmos">Mini basquet</option>
                <option value="Zumba y ritmos">Inferiores</option>
                <option value="Zumba y ritmos">Plantel Superior</option>
                <option value="Zumba y ritmos">Maxi basquet</option>
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
export default Basquet