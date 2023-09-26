import React  from "react";
import Video from "../Video/video";
import estadiounicoTest from '../imagenes/estadiounicoTest.jpg'
import ModalEstadioUnico from "../Galerias/estadioUnico";
import triatlon from '../imagenes/triatlon.jpg'
import {Link} from 'react-router-dom';
import './home.css'
import NewsListContainer from "../NewsListContainer/NewsListContainer";
function Home(){

 
  
  return(
    <main className="mainIndex" >
        <Video />
      <section  className="container-fluid">
        <div className="row">
          <div className="col-lg-12" style={{paddingTop:'30px', paddingBottom:'700px', paddingRight:'0px', paddingLeft:'0px' }}>
            <NewsListContainer/>
          </div>
        </div>
        </section>
    </main>
  )
}
export default Home