import React from "react";
import "./autoridades.css";
import autoridades from "../imagenes/autoridades.jpg";

function Autoridades() {
  return (
    <main className="autoridades-main">
<header className="autoridades-hero-clean">
  <div className="autoridades-hero-content">
    <h1 className="autoridades-hero-title">Autoridades</h1>
    <p className="autoridades-hero-subtitle">
      Comisión Directiva del Club Belgrano San Nicolás
    </p>
  </div>
</header>



      <section className="container-fluid sectionAuto" >
        <div className="row">
          <div className="col-lg-12 autoridades-block">
            <h4 className="autoridades-heading">Presidencia</h4>
            <ul className="autoridades-list">
              <li>
                <span className="cargo">Presidente:</span>{" "}
                <span className="nombre">Sr. Ezequiel Parodi</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 autoridades-block">
            <h4 className="autoridades-heading">Titulares</h4>
            <ul className="autoridades-list">
              <li><span className="cargo">Vice Presidente:</span> Sr. Jeronimo Galvan</li>
              <li><span className="cargo">2º Vice Presidente:</span> Sr. Victor Arnone</li>
              <li><span className="cargo">Secretario General:</span> Dr. Pablo D'Adamo</li>
              <li><span className="cargo">Secretario de Actas:</span> Sr. Martin Cagrandi</li>
              <li><span className="cargo">Tesorero:</span> Cdor. Sebastian Reviglio</li>
              <li><span className="cargo">Pro Tesorero:</span> Sr. German Ghio</li>
              <li><span className="cargo">Vocal Titular:</span> Dr. Mateo Ferrari</li>
              <li><span className="cargo">Vocal Titular:</span> Dr. Jose Pendino</li>
              <li><span className="cargo">Vocal Titular:</span> Sr. Hector Mazzolini</li>
              <li><span className="cargo">Vocal Titular:</span> Sr. Ivan Amigo</li>
              <li><span className="cargo">Vocal Titular:</span> Sr. Hernan Sereneli</li>
              <li><span className="cargo">Vocal Titular:</span> Sr. Lucas Galvan</li>
            </ul>
          </div>

          <div className="col-lg-4 autoridades-block">
            <h4 className="autoridades-heading">Suplentes</h4>
            <ul className="autoridades-list">
              <li><span className="cargo">Vocal Suplente:</span> Sr. Juan Carlos Acuña</li>
              <li><span className="cargo">Vocal Suplente:</span> Dr. Gustavo Zelayeta</li>
              <li><span className="cargo">Vocal Suplente:</span> Sr. Leandro Ghio</li>
              <li><span className="cargo">Vocal Suplente:</span> Sr. Pablo Mazzeo</li>
              <li><span className="cargo">Vocal Suplente:</span> Sr. Jose Marti</li>
              <li><span className="cargo">Vocal Suplente:</span> Sr. Fernando Lopez del Sarto</li>
            </ul>
          </div>

          <div className="col-lg-4 autoridades-block">
            <h4 className="autoridades-heading">Tribunal de Disciplina</h4>
            <ul className="autoridades-list">
              <li><span className="cargo">Titular:</span> Sr. Javier Solis</li>
              <li><span className="cargo">Titular:</span> Dr. Jose A. Corral</li>
              <li><span className="cargo">Titular:</span> Sr. Jose Eterovich</li>
              <li><span className="cargo">Suplente:</span> Sr. Arnoldo Baquela</li>
              <li><span className="cargo">Suplente:</span> Sra. Valerina Rudenko</li>
              <li><span className="cargo">Suplente:</span> Sr. Edgardo Lazzarino</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Autoridades;
