import React from "react";
import './main.css';
import pellegriniMain from '../imagenes/pellegrini_main.webp'
import campingMain from '../imagenes/camping_main.webp'

function MainInstalaciones(){
    return(
        <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
            <div className="col-lg-4">
                <img src={pellegriniMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4">
                <img src={campingMain} className="imgMain" alt="" />
            </div>
        </div>
        

   </main>
    )
}
export default MainInstalaciones