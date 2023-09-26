import React from "react";
import './main.css';
import {Link} from 'react-router-dom'

import historiaMain from '../imagenes/mainHistoria.webp';
import autoridadesMain from '../imagenes/mainAutoridades.webp';
function MainElClub(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <img src={historiaMain} className="imgMain" alt="" />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/autoridades'>
                <img src={autoridadesMain} className="imgMain" alt="" />
                </Link>
            </div>
        </div>
   </main>
    )
}
export default MainElClub