import React from "react";
import './escuelas.css'
import portPrimaria from '../imagenes/primaria_port.webp'
import primariaUno from '../imagenes/primariauno.webp'
import primariaDos from '../imagenes/primariados.webp'
import primariaTres from '../imagenes/primariatres.webp'
function Primaria() {
  return (
    <main className="mainSports" style={{ marginTop: '8rem' }}>
      <img src={portPrimaria} className="portadaBs col-lg-12 " alt="portadaBas" style={{ paddingTop: '10rem' }} />
      <section className="container-fluid" >
        <div className="row">
          <div className=" contenedor col-lg-6 row g-3" style={{ fontSize: '12px', marginTop: '14px' }}>
            <h4 >Nivel Primario</h4>
            <div className="mx-auto"   >
              <p className="introText">Con la meta de continuar con su acción educativa y luego de la apertura del “JARDIN DE INFANTES”, en el año 1984, se inaugura el Nivel Primario. </p>
              <strong>Nuestra propuesta se basa en una educación integral, inclusiva y deportiva. La labor educativa implementada por nuestro equipo de trabajo está basada en los valores, en la solidaridad, en el deporte, formando individuos reflexivos, críticos y capaces de compartir con el otro en comunidad. </strong>
              <p className="introText">La formación académica esta acompañada por el EOE (Equipo de Orientación Escolar), ESCUELA DE DEPORTES y diversos proyectos como CAMPAMENTISMO, SALIDAS EDUCATIVAS , PRACTICAS DEPORTIVAS en tierra y agua, Educación Artística e Inglés desde el primer ciclo que en conjunto contribuyen a cumplir con nuestro principal objetivo EN UN MARCO DE INCLUSION: EDUCACIÓN + DEPORTE. </p>
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={primariaUno} alt="" />
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={primariaDos} alt="" />
            </div>
            <div className="mx-auto" >
              <img className="fotosCamping" src={primariaTres} alt="" />
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
export default Primaria