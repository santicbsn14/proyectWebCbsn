import React from "react";
import './escuelas.css'
import portJardin from '../imagenes/jardin-port.webp'
import jardinUno from '../imagenes/jardinuno.webp'
import jardinDos from '../imagenes/jardindos.webp'
import jardinTres from '../imagenes/jardintres.webp'
function Jardin() {
  return (
    <main className="mainSports" style={{ marginTop: '8rem' }}>
      <img src={portJardin} className="portadaBs col-lg-12 " alt="portadaBas" style={{ paddingTop: '10rem' }} />
      <section className="container-fluid " >
        <div className="row linea">
          <div className=" contenedor col-lg-6 col-md-12 col-sm-12 row g-3" style={{ fontSize: '12px', marginTop: '14px' }}>
            <h4 >Nivel Inicial</h4>
            <div className="mx-auto"   >
              <strong >El Club Belgrano con la meta de realizar una acción educativa, fundamentada en los intereses de los niños y proyectada a la comunidad con la integración activa de la familia belgranense; comienza en 1980 a dar sus primeros pasos en la Educación Formal a través del “Jardín de Infantes”
                El Jardín fue aprobado (en Res.2384/83 Exp.2613-099067483 ) en el año 1983 teniendo como entidad propietaria hasta la fecha al Club Belgrano, la misma marca el rumbo en el Proyecto de la Institución a través de una educación integral, buscando formar personas:
              </strong>
              <ul>
                <li>
                  •	Capaces de trabajar en equipo,con conductas solidarias, trabajando para la paz, reconociendo sus derechos y deberes,
                </li>
                <li>•	Desarrollarlos como agentes multiplicadores de la salud, favoreciendo la inclusión</li>
                <li>•	Que conozcan y autorregulen sus emociones, con sólidos valores y respeto a las normas.</li>
                <li>•	Preparadas para competir sanamente en todos los órdenes de la vida.</li>
                <li>•	Que tengan hábitos saludables vinculados a la alimentación variada y equilibrada,</li>
                <li>•	Que practiquen ejercicios físicos orientados al desarrollo motríz y la iniciación al deporte.</li>
              </ul>
              <p className="introText">Estos valores se impregnan en el trabajo de los aprendizajes diarios de los contenidos formales, buscando que sean de alta calidad. </p>
              <p className="introText">Los niños, al matricularse en la institución pasan a ser automáticamente socios del Club, lo que les permite no solo permanecer mayor cantidad de horas sino disfrutar del resto del día de estos beneficios. </p>
              <p className="introText">La formación académica está acompañada por variados proyectos que en conjunto, contribuyen a cumplir con nuestro principal objetivo: la “EDUCACIÓN + DEPORTEcd”. </p>
              <p className="introText">Algunos de esos proyectos son Educación Física con prácticas en tierra y acuáticas; Proyecto de Iniciación Deportiva; Proyecto de Nutrición; etc.</p>
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={jardinUno} alt="" />
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={jardinDos} alt="" />
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={jardinTres} alt="" />
            </div>
          </div>


          <form className=" col-lg-6 row g-3 formulario mx-auto" >
            <h4>Contactar Para Inscripciones</h4>
            <p>¡Obtendra una respuesta en la direccion del correo electronico que ingrese!</p>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Nombre</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Email</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{ height: '80px' }} id="inputAddress2" />
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
export default Jardin