import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import './newDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { urlFor } from "../../client";

function NewsDetail({ news }) {


  const fecha = new Date(news.newsDatetime);
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
    <section className="container containerNewdetail">
      <div className="row probando">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1><strong className="mx-auto">{news.title}</strong></h1>
          <div style={{ fontSize: '10px' }}>{fechaFormateada}</div>
          <hr className="mb-2 mb-md-3" />
          <div style={{ display: 'flex' }}>
            <span style={{ backgroundColor: 'rgb(203, 0, 0)', height: '20px', color: 'yellow', borderRadius: '3px' }}>{news.category}</span>
            {news.topics.map((topic) => {
              return <p style={{ padding: '3px' }}><FontAwesomeIcon style={{ color: 'rgb(203, 0, 0)' }} icon={faTags} beatFade /> {topic}</p>
            })}
          </div>
          <hr className="mb-2 mb-md-3" />
          <p> <strong>{news.description}</strong></p>
          <div style={{ fontSize: '12px' }} className="col-lg-12 col-md-12 col-sm-12">
            {news.newsBody}
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          {news.imagenes.map((imagen, index) => {
            return (
              <img
                className="col-lg-4"
                loading="lazy"
                key={index}
                src={urlFor(imagen)}
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

      </div>
      {isViewerOpen && (
        <div className="image-viewer">
          <ImageViewer
            src={news.imagenes.map(imagen => urlFor(imagen))}
            currentIndex={currentImage}
            onClose={closeImageViewer}
          />
          <button className="btn btn-close" onClick={closeImageViewer}>
          </button>
        </div>
      )}
    </section>
  );
}


export default NewsDetail;