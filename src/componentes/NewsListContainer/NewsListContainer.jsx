import React from "react";
import { useState, useEffect } from "react";
;
import { getNews } from "../MockService/newsRepository";
import Loader from '../loaders/Loader'
import NewsList from "./NewsList.jsx";
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
      <div className="container-fluid" >
       {news ? <NewsList news={news}/>: <div style={{margin:'0px', position:'relative'}}><Loader/></div>}
       </div>
    )
      
  }
  export default NewsListContainer