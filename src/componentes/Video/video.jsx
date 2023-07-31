import React from "react";
import videoMain from '../imagenes/reelbel.mp4'
function Video(){
    return(
        <video src={videoMain} style={{width:'100%', paddingTop:'150px'}}  playsInline muted autoPlay  allow="autoplay">
        <source type="video/mp4"  />
        Tu navegador no soporta el elemento de video.
      </video>
    )
}
export default Video