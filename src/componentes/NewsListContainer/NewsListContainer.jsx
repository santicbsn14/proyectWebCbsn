import React, { useState, useEffect } from "react";
import { getNews } from "../MockService/newsRepository";
import { getPosts } from "../../client.js";
import NewsList from "./NewsList.jsx";
import Loader from "../Loader/loader.jsx";

function NewsListContainer() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchNews() {
    try {
      const response = await getPosts();
    
      setNews(response);
      setLoading(false)
    } catch (error) {
      console.error("There was a problem fetching news:", error);
      setError("Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.");
      setLoading(false); // Cambia el estado de loading a false en caso de error
    }
  }
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Si la solicitud tarda más de 10 segundos, muestra un mensaje de error
      setLoading(false); // Cambia el estado de loading a false en caso de timeout
    }, 5000); // Tiempo de espera de 10 segundos

    fetchNews();
    
    return () => clearTimeout(timeout); // Limpia el timeout si el componente se desmonta antes de que se complete
  }, []);

  return (
       <div className="container-fluid" style={{ margin: "0px" }}>
         {loading ? (
           <Loader />
         ) : news ? (
           <NewsList news={news} />
         ) : (
           <div>{error}</div>
         )}
       </div>

  );
}

export default NewsListContainer;
