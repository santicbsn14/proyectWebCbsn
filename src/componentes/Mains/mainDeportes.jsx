import './main.css';
import voleyMain from '../imagenes/voley_main.webp'
import zumbaMain from '../imagenes/zumba_main.webp'
import futsalMain from '../imagenes/futsal_main.webp'
import futbolMain from '../imagenes/futbol_main.webp' 
import basquetMain from '../imagenes/basquet_main.webp'
import ajedrezMain from '../imagenes/ajedrez_main.webp'
import gimnasiaAcuaticaMain from '../imagenes/gimnasia-acuatica-main.webp'
import gimnasiaArtisticaMain from '../imagenes/gimnasia_artistica_main.webp'
import efiMain from '../imagenes/efi_main.webp'
import taekwondoMain from '../imagenes/taekwondo_main.webp'
import rugbyMain from '../imagenes/rugby_main.webp'
import handballMain from '../imagenes/handball_main.webp'
import yogaMain from '../imagenes/yoga_main.webp'
import judoMain from '../imagenes/judo_main.webp'
import patinMain from '../imagenes/patin_main.webp'
import natacionMain from '../imagenes/natacion_main.webp'
import hockeyMain from '../imagenes/hockey_main.webp'
import gimnasioMain from '../imagenes/gimnasio_main.webp'
import { Link } from "react-router-dom";
function MainSports(){
    return(
    <main  className="container-fluid mainSports">
        <div className="row mx-auto" >
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/zumba'>
                <img src={zumbaMain} className="imgMain" loading="lazy" alt="" />
                </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/futsal'>
                <img src={futsalMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/voley'>
                <img src={voleyMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
               <Link to='/futbol'>
                <img src={futbolMain} className="imgMain" loading="lazy" alt="" />
                </Link> 
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'>
                <img src={basquetMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/EFI'> 
                <img src={efiMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/ajedrez'> 
                <img src={ajedrezMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/gimnasiaAcuatica'> 
                <img src={gimnasiaAcuaticaMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'> 
                <img src={gimnasiaArtisticaMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/gimnasio'> 
                <img src={gimnasioMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/rugby'> 
                <img src={rugbyMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/handball'> 
                <img src={handballMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/taekwondo'> 
                <img src={taekwondoMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/yoga'> 
                <img src={yogaMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/basquet'> 
                <img src={patinMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/natacion'> 
                <img src={natacionMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/hockey'> 
                <img src={hockeyMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
            <Link to='/judo'> 
                <img src={judoMain} className="imgMain" loading="lazy" alt="" />
            </Link>
            </div>
        </div>

   </main>
    )
}
export default MainSports