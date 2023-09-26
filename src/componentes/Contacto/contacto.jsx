import React from "react";
import './contacto.css'
function Contacto(){
    return(
        <main className="mainContact">
        <section className="sectioncon container-fluid my-3">
          <div className="row">
          <div className="datosUbicacion col-lg-5 col-md-12 col-sm-12 ">
            <h3>Contactanos</h3>
            <h6>Pellegrini 476,B2900 DMJ, Provincia BS AS, Argentina</h6>
            <h6>0336 445-4540</h6>
            <iframe className="mapaUbi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.276150747003!2d-60.223823485130204!3d-33.337734599121696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b767855bb456eb%3A0x76b58e866dc3ba09!2sClub%20Belgrano%20San%20Nicolas!5e0!3m2!1ses-419!2sar!4v1651008507071!5m2!1ses-419!2sar"   style={{border:'0', width:"150", height:"450"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 my-3">
            <form className="row  formularioCon ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label for="inputEmail4" className="form-label">Nombre y apellido</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label for="inputPassword4" className="form-label">Email</label>
                <input type= "text" className="form-control" />
              </div>
              <div className="col-12 col-md-12 col-sm-12">
                <label for="inputAddress" className="form-label">Provincia</label>
                <input type="text" className="form-control" id="inputAddress" />
              </div>
              <div className="col-12 col-md-12 col-sm-12">
                <label for="inputAddress2" className="form-label">Localidad</label>
                <input type="text" className="form-control" id="inputAddress2" />
              </div>
              <div className="col-12 col-md-12 col-sm-12 my-1">
                <label for="inputAddress2" className="form-label">Mensaje</label>
                <input type="text" className="form-control message" id="inputAddress2" />
              </div>
              <div className="col-12 col-md-12 col-sm-12">
                <button type="submit" className="btn btnCards ">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        </section>    
      </main>
    )
}
export default Contacto