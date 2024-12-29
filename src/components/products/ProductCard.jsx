import React from 'react'
import { Link } from 'react-router-dom'
import './Productcard.css'


export default function ProductCard(props) {
 
   const imgpath = `http://127.0.0.1:8000/` + props.image
 
    return (
      <div className='col-10 mb-4  ' style={{color:"white",textAlign:"center",   textShadow:"2px 2px 2px black", }}>
            <div className="container CCC row  card" style={{backgroundColor:"#8FBFBF"}}>
                <div className=" p-4 ">
                    <h4 className=" card-title text-light text-center" style={{ textAlign:"center"}}>{props.name}</h4>
                    <img className="card-img" src={`${props.image}`} style={{maxWidth:"600px",maxHeight:"600px" }} width="600px" height="300px" alt="fd"/>
                    <div className='col-3 '>
                    <Link to={`/product/${props.id}`} className='detal btn-link btn btn-sm btn-outline mt-5'  style={{
                          textDecoration:"none" ,  
                          backgroundColor:"#2b3e3c",
                          color:"#F6FBF9",
                          fontSize:"larger",
                          fontWeight:"bold"}}
                    >Detalis</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
