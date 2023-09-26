import React from "react";
import './main.css';
import voleyMain from '../imagenes/voley_main.webp'
import zumbaMain from '../imagenes/Zumba_main.webp'
import futsalMain from '../imagenes/Futsal_main.webp'
import futbolMain from '../imagenes/futbol_main.webp'
import basquetMain from '../imagenes/basquet_main.webp'
import ajedrezMain from '../imagenes/ajedrez_main.webp'
import gimnasiaAcuaticaMain from '../imagenes/gimnasia-acuatica-main.webp'
import gimnasiaArtisticaMain from '../imagenes/gimnasia_artistica_main.webp'
import efiMain from '../imagenes/efi_main.webp'
import { Link } from "react-router-dom";
function MainSports(){
    return(
    <main  className="container-fluid mainSports">
        <div className="row mx-auto" >
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/zumba'>
                <img src={zumbaMain} className="imgMain" alt="" />
                </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/futsal'>
                <img src={futsalMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'>
                <img src={voleyMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
               <Link to='/futbol'>
                <img src={futbolMain} className="imgMain" alt="" />
                </Link> 
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'>
                <img src={basquetMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/EFI'> 
                <img src={efiMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/ajedrez'> 
                <img src={ajedrezMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/gimnasiaAcuatica'> 
                <img src={gimnasiaAcuaticaMain} className="imgMain" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'> 
                <img src={gimnasiaArtisticaMain} className="imgMain" alt="" />
            </Link>
            </div>
        </div>

   </main>
    )
}
export default MainSports