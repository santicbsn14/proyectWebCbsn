import React from "react";
import './autoridades.css'
import autoridades from '../imagenes/autoridades.jpg'
function Autoridades(){
  return(
    <main>
    <img src={autoridades} className="portAutoridades" alt="" />
    <section style={{marginTop:'9rem'}} className="container-fluid sectionAuto">
      <div className="row">
        
        <div className="col-lg-12">
          <h4>Presidencia</h4>
          <ul>
            <li>Sr. Ezequiel Parodi</li>
          </ul>
        </div>
        <div className="col-lg-4">
         <h4>Titulares</h4>
         <ul>
          <li>Vice Presidente: Sr.Victor Arnone</li>
          <li>2ºdo Vice Presidente: Sr. Jernoimo Galvan</li>
          <li>Secretario General: Dr. Pablo D'Adamo</li>
          <li>Secretario de actas: Sr. Martin Cagrandi</li>
          <li>Tesorero: Cdor. Sebastian Reviglio</li>
          <li>Pro Tesorero: Sr. German Ghio</li>
          <li>Vocal Titular: Dr. Mateo Ferrari</li>
          <li>Vocal Titular: Dr. Jose Pendino</li>
          <li>Vocal Titular: Sr. Hector Mazzolini</li>
          <li>Vocal Titular: Sr. Ivan Amigo</li>
          <li>Vocal Titular: Sr. Hernan Sereneli</li>
          <li>Vocal Titular: Sr. Lucas Galvan</li>
         </ul>
        </div>
        <div className="col-lg-4">
          <h4>Suplentes</h4>
          <ul>
           <li>Vocal Suplente: Sr. Juan Manuel Viale</li>
           <li>Vocal Suplente: Dr. Jose Pendino</li>
           <li>Vocal Suplente: Sr. Javier Solis</li>
           <li>Vocal Suplente: Sr. Juan C Acuña</li>
           <li>Vocal Suplente: Sr. Diego Maggiori</li>
           <li>Vocal Suplente: Sr. Fernando Lopez del Sarto</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h4>Tribunal De Disciplina</h4>
          <ul>
           <li>Titular: Dr. Juan Manuel Eseverri</li>
           <li>Titular: Dr. Cesar Mena</li>
           <li>Titular: Sr. Eduardo Oscar Viale</li>
           <li>Suplente: Sr. Juan C Acuña</li>
           <li>Suplente: Sr. Diego Maggiori</li>
           <li>Suplente: Sr. Fernando Lopez del Sarto</li>
          </ul>
        </div>
      </div>
    </section>
  </main>)
}
export default Autoridades