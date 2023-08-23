import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import clubBelgranoEstadio from "../imagenes/ClubBelGranoEstadio.jpg"
function NewsDetail({news}) {


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
    <section style={{paddingTop:'8rem'}}>
      <h1>Hola esto es el item detail de {news.data.title} </h1>
      <div style={{ display: "flex", marginTop: "40px" , maringLeft:'21rem'}}>
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
    </section>
  );
}

export default NewsDetail;