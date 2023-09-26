import React from "react";
import videoMain from '../imagenes/reelbel.mp4'
import './video.css'
function Video(){
    return(
        <video className="videoInicio" src={videoMain} style={{width:'100%'}}  playsInline muted autoPlay  allow="autoplay">
        <source type="video/mp4"   />
        Tu navegador no soporta el elemento de video.
      </video>
    )
}
export default Video