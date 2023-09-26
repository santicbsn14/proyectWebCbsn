import React from 'react'
import News from './News'

function NewsList({news}) {
 
  return (
    <div className='row' style={{width:'100%'}} >
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
  )
}

export default NewsList