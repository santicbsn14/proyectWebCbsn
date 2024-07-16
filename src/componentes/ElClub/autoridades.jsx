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
          <li>Vice Presidente: Sr.Jernoimo Galvan</li>
          <li>2ºdo Vice Presidente: Sr. Victor Arnone</li>
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
           <li>Vocal Suplente: Sr. Juan Carlos Acuña</li>
           <li>Vocal Suplente: Dr. Gustavo Zelayeta</li>
           <li>Vocal Suplente: Sr. Leandro Ghio</li>
           <li>Vocal Suplente: Sr. Pablo Mazzeo</li>
           <li>Vocal Suplente: Sr. Jose Marti</li>
           <li>Vocal Suplente: Sr. Fernando Lopez del Sarto</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h4>Tribunal De Disciplina</h4>
          <ul>
           <li>Titular: Sr. Javier Solis</li>
           <li>Titular: Dr. Jose A. Corral</li>
           <li>Titular: Sr. Jose Eterovich</li>
           <li>Suplente: Sr. Arnoldo Baquela</li>
           <li>Suplente: Sra. Valerina Rudenko</li>
           <li>Suplente: Sr. Edgardo Lazzarino</li>
          </ul>
        </div>
      </div>
    </section>
  </main>)
}
export default Autoridades