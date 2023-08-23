import React from "react";
import './main.css';
import jardinMain from '../imagenes/jardin_main.webp';
import primariaMain from '../imagenes/primaria_main.webp';
import secundariaMain from '../imagenes/secundaria_main.webp';
function MainEscuelas(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
        <div className="col-lg-4">
                <img src={jardinMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={primariaMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={secundariaMain} className="imgMain" alt="" />
            </div>
        </div>
   </main>
    )
}
export default MainEscuelas