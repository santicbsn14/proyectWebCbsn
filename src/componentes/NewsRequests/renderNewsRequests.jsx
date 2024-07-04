import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import News from "../NewsListContainer/News";
import { getPostBySearch } from "../../client";
import Loader from "../Loader/loader";

function RenderNewsRequests() {
  let word = useParams();
  let results = word.word;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const requestNews = async () => {
    try {
      const response = await getPostBySearch(results);
      if (response) {
        setNews(response);
      } else {
        // No se encontraron noticias
        setNews([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    requestNews();
  }, [word]);

  return (
    <div className="row" style={{ marginTop: "14rem", margin: "0px" }}>
      {loading ? (
        // Mostrar el loader mientras se cargan las noticias
        <div style={{ marginTop: "0px", position: "relative", left: "550px" }}>
          <Loader></Loader>
        </div>
      ) : news.length === 0 ? (
        // Mostrar mensaje de que no se encontraron noticias
        <h4 style={{marginTop:'20rem'}}>¡No se encontraron noticias!</h4>
      ) : (
        // Mostrar las noticias
        news.map((newsDocument) => (
          <News
            key={newsDocument._id}
            id={newsDocument._id}
            imgPort={newsDocument.imgPort}
            title={newsDocument.title}
            description={newsDocument.description}
            newsBody={newsDocument.newsBody}
            newsDatetime={newsDocument.newsDatetime}
            imgs={newsDocument.imgs}
            topics={newsDocument.topics}
            status={newsDocument.status}
            category={newsDocument.category}
          />
        ))
      )}
    </div>
  );
}

export default RenderNewsRequests;
