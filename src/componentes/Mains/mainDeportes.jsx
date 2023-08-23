import React from "react";
import './main.css';
import voleyMain from '../imagenes/Voley_main.webp'
import zumbaMain from '../imagenes/Zumba_main.webp'
import futsalMain from '../imagenes/Futsal_main.webp'
import futbolMain from '../imagenes/futbol_main.webp'
import basquetMain from '../imagenes/basquet_main.webp'
import efiMain from '../imagenes/efi_main.webp'
import { Link } from "react-router-dom";
function MainSports(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
            <div className="col-lg-4">
                <Link to='/basquet'>
                <img src={zumbaMain} className="imgMain" alt="" />
                </Link>
            </div>
            <div className="col-lg-4">
            <Link to='/basquet'>
                <img src={futsalMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4">
            <Link to='/basquet'>
                <img src={voleyMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4">
               <Link to='/basquet'>
                <img src={futbolMain} className="imgMain" alt="" />
                </Link> 
            </div>
            <div className="col-lg-4">
            <Link to='/basquet'>
                <img src={basquetMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4">
            <Link to='/basquet'> 
                <img src={efiMain} className="imgMain" alt="" />
            </Link>
            </div>
        </div>

   </main>
    )
}
export default MainSports