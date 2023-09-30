import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews } from "../MockService/newsRepository";
import NewsDetail from "./NewsDetail.jsx";
import Loader from "../Loader/loader.jsx";

function NewDetail() {
    let idparam = useParams()
    let id = idparam.id
    let [news, setNews] = useState(null)
    
    async function fetchNews() {
      try {
          const response = await getSingleNews(id); // Invoca la función getNews como una función
          setNews(response);
          // Establece la respuesta directamente en el estado news
          
      } catch (error) {
          console.error('There was a problem fetching news:', error);
      }
  }
  useEffect(() => {
      fetchNews();
  }, []);
   
  return (
    <div className="container-fluid" style={{margin:'0px', marginTop:'5rem'}}>
     {news ? <NewsDetail news={news}/>: <Loader/>}
     </div>
  )
}

export default NewDetail;
