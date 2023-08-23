import React from 'react'
import {Link} from 'react-router-dom'

function News(props) {
  let url = `/newsdetail/${props.id}`
  return (
    <div className="col-lg-4 mx-auto card cardsManager " style={{width:'21.875rem', height:' auto', paddingBottom:'20px', }}>
    <img src={props.imgPort} className="card-img-top" alt="..."/>
       <div className="card-body" style={{backgroundColor:'white'}}>
         <div style={{padding:'0.5rem'}}>
        <h4 className="card-title" style={{color:'red'}}>{props.title}</h4>
          <p className="card-text" style={{fontSize:'0.8rem'}}>{props.description} </p>
          <Link to={url}>
          <button className="btn btnCards" > Go somewhere</button>
          </Link>
         </div>
       </div>
   </div>
  )
}

export default News