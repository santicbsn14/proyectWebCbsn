import React  from "react";
import Video from "../Video/video";
import estadiounicoTest from '../imagenes/estadiounicoTest.jpg'
import ModalEstadioUnico from "../Galerias/estadioUnico";
import triatlon from '../imagenes/triatlon.jpg'
import {Link} from 'react-router-dom';
import './home.css'
function Home(){

 
  
  return(
    <main className="mainIndex ">
        <Video />
      <section  className="container-fluid">
        <div className="row">
          <div className="col-lg-9 cards " style={{paddingTop:'30px', paddingBottom:'700px', marginLeft:'8rem' }}>
            <div className="card cardsManager me-5 " style={{width:'21.875rem', height:' auto', paddingBottom:'20px', }}>
             <img src={estadiounicoTest} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'white'}}>
                  <div style={{padding:'0.5rem'}}>
                 <h4 className="card-title" style={{color:'red'}}>Lo mejor de belgrano es su gente: la fiesta del club en el "Estadio unico"</h4>
                   <p className="card-text" style={{fontSize:'0.8rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis assumenda rerum, est nemo tempore non iste distinctio molestias harum vitae quis dolores vel architecto! Deleniti est soluta ullam velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex a dolorum magnam voluptas voluptatum consequatur placeat porro voluptatibus labore optio quaerat fugit, enim architecto voluptates iusto sapiente odio laboriosam facilis! </p>
                   <Link to='/estadioUnico' element={<ModalEstadioUnico/>}><a href="#" className="btn btnCards ">Go somewhere</a></Link>
                  </div>
                </div>
            </div>
            <div className="card cardsManager me-5 " style={{width:'21.875rem', height:' auto', paddingBottom:'20px', }}>
             <img src={triatlon} className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:'white'}}>
                  <div style={{padding:'0.5rem'}}>
                 <h4 className="card-title" style={{color:'red'}}>El triatlon de todos los años: un año mas que participaron chicos y grandes del tradicional evento </h4>
                   <p className="card-text" style={{fontSize:'0.8rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis assumenda rerum, est nemo tempore non iste distinctio molestias harum vitae quis dolores vel architecto! Deleniti est soluta ullam velit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex a dolorum magnam voluptas voluptatum consequatur placeat porro voluptatibus labore optio quaerat fugit, enim architecto voluptates iusto sapiente odio laboriosam facilis! </p>
                   <Link to='/estadioUnico' element={<ModalEstadioUnico/>}><a href="#" className="btn btnCards ">Go somewhere</a></Link>
                  </div>
                </div>
            </div>

          </div>
        </div>
        </section>
    </main>
  )
}
export default Home