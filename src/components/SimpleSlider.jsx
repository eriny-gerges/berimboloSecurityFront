import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css"
import cam1  from "../../public/images/homebanner.webp"
import cam2  from "../../public/images/banner1.jpg"
import cam3  from "../../public/images/banner2.jpg"
export default function SimpleSlider() {
  var settings = {
    dots: false ,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="col-12 p-0 m-0" style={{overflow:"hidden" , position:"relative"}} >
      <div className="p-5 floating-div" style={{position:"absolute", top:"40%", left:"20%" ,zIndex:"500" }}>
      <h2 style={{color:"#8FBFBF" ,textAlign:"strart"}}>Berimbolo security</h2>
      <p style={{color:"#f2f2f2f2"}}>For all security serveses</p>
      </div>
    <Slider {...settings}>
      <div className="col-12 p-0 m-0" style={{maxHeight:"80vh"}} >
        <img src={cam1} alt=""  className="img-fluid col-12" style={{height:"80vh" }}/>
      </div> 
      <div className="col-12 p-0 m-0" style={{maxHeight:"80vh"}} >
        <img src={cam2} alt=""  className="img-fluid  col-12" style={{height:"80vh"}}/>
      </div> 
      <div className="col-12 p-0 m-0" style={{maxHeight:"80vh"}} >
        <img src={cam3} alt=""  className="img-fluid  col-12" style={{height:"80vh"}}/>
      </div> 
    </Slider>
    </div>
  );
}