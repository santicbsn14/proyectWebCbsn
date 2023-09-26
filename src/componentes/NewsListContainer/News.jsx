import React from 'react'
import {Link} from 'react-router-dom'

function News(props) {
  let url = `/newsdetail/${props.id}`
  return (
    <div className="col-lg-4 mx-auto card cardsManager " style={{width:' 17.5rem', height:' auto', paddingBottom:'16px', }}>
    <img src={props.imgPort} className="card-img-top" alt="..."/>
       <div className="card-body" style={{backgroundColor:'white'}}>
         <div style={{padding:'0.4rem'}}>
        <h5 className="card-title" style={{color:'red'}}>{props.title}</h5>
          <p className="card-text" style={{fontSize:'0.64rem'}}>{props.description} </p>
          <Link to={url}>
          <button className="btn btnCards" > Go somewhere</button>
          </Link>
         </div>
       </div>
   </div>
  )
}

export default News