import React from "react";
import News from "../NewsListContainer/News";

function NewsRequests({news}){
    
    return(
    <section  className="container-fluid" >
    <div className="row">
      <div className="col-lg-9 cards" style={{marginTop:'30rem', paddingBottom:'500px', marginLeft:'8rem' }}>
      <div className='row' style={{margin:'0px'}}>
        {news.data.map((newsDocument)=>{
            return(
                <News
                key={newsDocument.id}
                id = {newsDocument.id}
                imgPort={newsDocument.imgPort}
                title={newsDocument.title}
                description={newsDocument.description}
                newsBody={newsDocument.newsBody}
                newsDatetime={ newsDocument.newsDatetime}
                imgs={newsDocument.imgs}
                topics={newsDocument.topics}
                status={ newsDocument.status}
                category={newsDocument.category}
                />
            )
        })}
    </div>
      </div>
    </div>
    </section>
    )
}
export default NewsRequests