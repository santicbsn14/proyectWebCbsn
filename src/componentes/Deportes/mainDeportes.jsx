import React from "react";
import './main.css';
import voleyMain from '../imagenes/VoleyMain.jpg'
import zumbaMain from '../imagenes/ZumbaMain.jpg'
import futsalMain from '../imagenes/FutsalMain.jpg'
import futbolMain from '../imagenes/futbolMain.png'
import basquetMain from '../imagenes/basquetMain.png'
import efiMain from '../imagenes/efiMain.png'
function MainSports(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
            <div className="col-lg-4">
                <img src={zumbaMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={futsalMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={voleyMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={futbolMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={basquetMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={efiMain} className="imgMain" alt="" />
            </div>
        </div>

   </main>
    )
}
export default MainSports