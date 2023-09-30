import React from "react";
import { useState, useEffect } from "react";
;
import { getNews } from "../MockService/newsRepository";

import NewsList from "./NewsList.jsx";
import Loader from "../Loader/loader.jsx";
function NewsListContainer() {
    const [news, setNews] = useState(null)
    

    async function fetchNews() {
      try {
          const response = await getNews(); // Invoca la función getNews como una función
          setNews(response); // Establece la respuesta directamente en el estado news
          
      } catch (error) {
          console.error('There was a problem fetching news:', error);
      }
  }

  useEffect(() => {
      fetchNews();
  }, []);
 
    return (
      <div className="container-fluid" style={{margin:'0px'}}>
       {news ? <NewsList news={news}/>: <Loader/>}
       </div>
    )
      
  }
  export default NewsListContainer