import './main.css';
import {Link} from 'react-router-dom'
import jardinMain from '../imagenes/jardin_main.webp';
import primariaMain from '../imagenes/primaria_main.webp';
import secundariaMain from '../imagenes/secundaria_main.webp';
function MainEscuelas(){
    return(
    <main style={{marginTop:'11rem'}} className="container-fluid mainSports">
        <div className="row" >
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/jardin'>
                    <img src={jardinMain } className="imgMain" alt="" />
                </Link>
            </div>    
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/primaria'>
                    <img src={primariaMain} className="imgMain" alt="" />
                </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mx-auto">
                <Link to='/secundaria'>
                    <img src={secundariaMain} className="imgMain" alt="" />
                </Link>
            </div>
        </div>
   </main>
    )
}
export default MainEscuelas
