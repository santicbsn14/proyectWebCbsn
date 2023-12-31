import React from "react";
import './main.css';
import { Link } from "react-router-dom";
import pellegriniMain from '../imagenes/pellegrini_main.webp';
import campingMain from '../imagenes/camping_main.webp';
import morteoMain from '../imagenes/morteo_main.webp'

function MainInstalaciones(){
    return(
        <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/sedePellegrini'>
                <img src={pellegriniMain} className="imgMain" alt="" />
            </Link> 
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/camping'>
                <img src={campingMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/morteo'>
                <img src={morteoMain} className="imgMain" alt="" />
            </Link>
            </div>
        </div>
        

   </main>
    )
}
export default MainInstalaciones