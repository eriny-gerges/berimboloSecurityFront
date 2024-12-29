import React, { useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick";
import ProductCard from './ProductCard';
import "./products.css"
 


 export async function fetchAllProducts(setData){
  const respons = await axios.get(`http://127.0.0.1:8000/api/products`);
  const data = respons.data.data ; 
  setData(data);

}
function Products() {
 const $loading ="loading";
 const [data,setData] =useState($loading);

 useEffect(function (){ fetchAllProducts(setData)},[setData])
 console.log(data);


 var settings = {
  dots: true ,
  infinite: false,
  speed: 150,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
 };
 return (
  (data ==  $loading)? <div>Loading</div> :
     <>
      <div className='container' >
      <div  className='color-main'>
        <h1 style={{textAlign:"center"}} className='m-4'>Products</h1>
      
      <div className='container row color-2 rounded p-3   mb-5 ' style={{
        margin:'auto',
        borderBottom:"2px solid #8FBFBF",
        display: 'flex',            
        justifyContent: 'center',   
        alignItems: 'center',       
        textAlign: 'center', 

      }}>
        
        <div className='col-4'  > 
          <a className='color-2 m-5  ' style={{textDecoration:"none"}}  href="#CCTV">CCTV Cameras</a>
        </div>
       
       <div className='col-4 ' > 
        <a className=' color-2  m-5'  style={{textDecoration:"none"}} href="#Alarms">Alarms</a>
       </div>
       
       <div className='col-4' > 
        <a className=' color-2  m-5'  style={{textDecoration:"none"}} href="#Bells">Bells</a>
       </div>
         </div>
        <div>
      </div>
      </div>
     
        <div className='row mt-4 mb-5'id='CCTV' >
         <div  className='col-12 color-main'>
         <h3 style={{textAlign:"center"}} className='m-4'>CCTV Cameras</h3>
         </div>
           <div className='col-12'>
              <Slider {...settings}>
                    {data.map((d, index) => {
                       if (d.category_id === 1 ) {
                         return (
                           <div className="col-12" key={index}>
                           <ProductCard  {...d} />
                           </div>
                          );}
                             return null;  
                        })}
               </Slider>
             </div> 
         </div>


         <div className='row mt-4 mb-5' id='Alarms'>
         <div  className='col-12 color-main'>
         <h3 style={{textAlign:"center"}} className='m-4'>Alarms</h3>
         </div>
           <div className='col-12'>
              <Slider {...settings}>
                    {data.map((d, index) => {
                       if (d.category_id === 2) {
                         return (
                           <div className="col-12" key={index}>
                           <ProductCard  {...d} />
                           </div>
                          );}
                             return null;  
                        })}
               </Slider>
             </div> 
         </div>
         <div className='row mt-4 mb-5' id='Bells'>
         <div  className='col-12 color-main'>
         <h3 style={{textAlign:"center"}} className='m-4'>Bells</h3>
         </div>
           <div className='col-12 '>
              <Slider {...settings} className=''> 
                    {data.map((d, index) => {
                       if (d.category_id === 3) {
                         return (
                           <div className="col-12 " key={index}>
                           <ProductCard  {...d} />
                           </div>
                          );}
                             return null;  
                        })}
               </Slider>
             </div> 
         </div>
        
      </div>
     </>
 ) 
  }

export default Products