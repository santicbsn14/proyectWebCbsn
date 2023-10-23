import React from "react";
import './main.css';
import {Link} from 'react-router-dom'

import nutricionMain from '../imagenes/nutricion_main.webp';
function MainAreaSalud(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
        <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <img src={nutricionMain} className="imgMain" alt="" />
        </div>
        </div>
   </main>
    )
}
export default MainAreaSalud