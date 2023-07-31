import React from "react";
import './main.css';
import gimnasiaArtistica from '../imagenes/Gimnasia Artistica.jpg'
import basquet from  '../imagenes/Basquet.jpg'
import hockey from '../imagenes/Hockey.jpg'
function MainInstalaciones(){
    return(
    <main className=" container-fluid mainSports">
        <div className="row">
            <div className="filasPhotos ">
            <div className="titulo">
               <img  className="imgMain" src={hockey} alt="" />
               <h2>Hockey</h2>
            </div>
            <div className="titulo">
               <img className="imgMain" src={basquet} alt="" />
               <h2>Basquet</h2>
            </div>
            <div className="titulo">
            <img className="imgMain" src={gimnasiaArtistica} alt="" />
            <h2>Gimnasia Artistica            </h2>
            </div>
            </div>
        </div>
   </main>
    )
}
export default MainInstalaciones