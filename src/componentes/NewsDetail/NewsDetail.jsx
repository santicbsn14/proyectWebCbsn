import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import {format} from "date-fns"
import { es } from "date-fns/locale"
import clubBelgranoEstadio from "../imagenes/ClubBelGranoEstadio.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from  '@fortawesome/free-solid-svg-icons'
function NewsDetail({news}) {



  const fecha = new Date(news.data.newsDatetime)
  const formatoDeseado = "dd 'de' MMMM 'de' yyyy";
  const fechaFormateada = format(fecha, formatoDeseado, { locale: es });

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section  className="container" style={{paddingTop:'8rem', marginLeft:'8rem'}}>
      <div className="row">
        <h1><strong>{news.data.title}</strong></h1>
        <div style={{fontSize:'10px'}}>{fechaFormateada}</div>
        <hr className="mb-2 mb-md-3" />
        <div style={{display:'flex'}}>
          <span style={{ backgroundColor:'rgb(203, 0, 0)', height:'20px', color:'yellow', borderRadius:'3px'}}>{news.data.category}</span>
        {news.data.topics.map((topic)=>{return<p style={{padding:'3px'}}><FontAwesomeIcon style={{color:'rgb(203, 0, 0)'}} icon={faTags} beatFade /> {topic}</p> })}
        </div>
        <hr className="mb-2 mb-md-3" />
        <p> <strong>{news.data.description}</strong></p>
        <div style={{fontSize:'12px'}} className="col-lg-8">
          {news.data.newsBody}
        </div>
      <div style={{ display: "flex", marginTop: "40px", marginLeft:'0px'}}>
        {news.data.imgs.map((imagen, index) => {
          return (
            <img
              key={index}
              src={imagen}
              style={{
                width: "9.375rem",
                height: "9.375rem",
                marginLeft: "20px",
                border: "2px solid black",
                cursor: "pointer",
              }}
              onClick={() => openImageViewer(index)}
              alt={`Image ${index}`}
            />
          );
        })}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={news.data.imgs}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
      </div>
    </section>
  );
}

export default NewsDetail;