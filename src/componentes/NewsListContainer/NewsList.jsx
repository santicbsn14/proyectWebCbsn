import React from 'react'
import News from './News'

function NewsList({news}) {
  return (
    <div className='row' style={{width:'100%'}} >
        {news.map((newsDocument)=>{
            return(
                <News
                key={newsDocument._id}
                id = {newsDocument._id}
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