import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews } from "../MockService/newsRepository";
import { getPostById } from "../../client.js";
import NewsDetail from "./NewsDetail.jsx";
import Loader from "../Loader/loader.jsx";

function NewsDetailContainer() {
  let { id } = useParams()


  let [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  async function fetchNews() {
    try {
      const response = await getPostById(id); // Invoca la función getNews como una función
      setNews(response);
      setLoading(false);

    } catch (error) {
      console.error('There was a problem fetching news:', error);
      setError("Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.");
      setLoading(false); // Cambia el estado de loading a false en caso de error
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Si la solicitud tarda más de 10 segundos, muestra un mensaje de error
      setError("La solicitud ha tardado demasiado. Por favor, inténtalo de nuevo más tarde.");
      setLoading(false); // Cambia el estado de loading a false en caso de timeout
    }, 10000); // Tiempo de espera de 10 segundos

    fetchNews();
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div className="container-fluid" style={{ margin: "0px" }}>
      {loading ? (
        <Loader />
      ) : news ? (
        <NewsDetail news={news} />
      ) : (
        <div>{error}</div>
      )}
    </div>
  )
}

export default NewsDetailContainer;
