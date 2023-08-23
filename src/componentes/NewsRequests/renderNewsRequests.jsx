import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import News from "../NewsListContainer/News";
import Loader from "../loaders/Loader";

function RenderNewsRequests() {
  let word = useParams()
  let results = word.word
  const [news, setnews] = useState([])
  const requestNews = async () => {
    try {
      const response = await fetch(`http://localhost:8083/api/news/title?title=${results}`);
      if (response.ok) {
        // Handle successful response
        const newsData = await response.json();
        setnews(newsData);
        console.log(newsData);
      } else {
        // Handle error response
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (news.length === 0) {
      requestNews();
    }
  }, []);

  return (
    <div className='row' style={{marginTop:'14rem', margin: '0px' }}>
      {news.length === 0 ? (
        // Mostrar el loader aquí
        <div style={{marginTop:'0px', position:'relative', left:'550px'}}><Loader/></div>
      ) : (
        // Mostrar las noticias
        news.data.map((newsDocument) => (
          <News
            key={newsDocument.id}
            id={newsDocument.id}
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
