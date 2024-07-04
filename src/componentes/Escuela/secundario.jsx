import React from "react";
import './escuelas.css'
import portSecundaria from '../imagenes/secu-port.webp'
import secuUno from '../imagenes/secuUno.webp'
import secuDos from '../imagenes/secuDos.webp'
import secuTres from '../imagenes/secuTres.webp'
function Secundaria() {
    return (
        <main className="mainSports" style={{ marginTop: '8rem' }}>
            <img src={portSecundaria} className="portadaBs col-lg-12 " alt="portadaBas" style={{ paddingTop: '10rem' }} />
            <section className="container-fluid" >
                <div className="row">
                    <div className=" contenedor col-lg-6 row g-3" style={{ fontSize: '12px', marginTop: '14px' }}>
                        <h4 >Nivel Secundario</h4>
                        <div className="mx-auto"   >
                            <p className="introText">El INSTITUTO POLIMODAL MANUEL BELGRANO  se funda en marzo del 2000 cuando su entidad propietaria, el Club Belgrano, decide completar los niveles de educación inicial.</p>
                            <p className="introText">Tras la sanción de la nueva Ley provincial de educación de la prov. de Buenos Aires en 2010 pasa a llamarse ESCUELA DE EDUCACIÓN SECUNDARIA CLUB BELGRANO sumando tres años de estudios y completando los 6.</p>
                            <p className="introText">Dentro de nuestro ideario resaltamos la formación integral de los individuos en valores, derechos y responsabilidades, la salud, el espíritu deportivo y la formación académica.</p>
                            <p className="introText">Más de 20 años de vida institucional y más de 450 egresados a la fecha son nuestra muestra de labor comprometida para la formación de adolescentes y jóvenes. </p>
                        </div>
                        <div className="mx-auto" >
                            <img className="fotosCamping" src={secuUno} loading="lazy" alt="" />
                        </div>
                        <div className="mx-auto" >
                            <img className="fotosCamping" src={secuDos} loading="lazy" alt="" />
                        </div>
                        <div className="mx-auto" >
                            <img className="fotosCamping" src={secuTres} loading="lazy" alt="" />
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
export default Secundaria