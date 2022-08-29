import React, { Component } from "react";
import Slider from "react-slick";
// import './css-lib/SlideView.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SlideView(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
    };
    const items = [
        {title: "name1", img: './img/logo-2.png'},
        {title: "name2", img: './img/logo-2.png'},
        {title: "name3", img: './img/logo-2.png'},
        {title: "name4", img: './img/logo-2.png'},
        {title: "name5", img: './img/logo-2.png'},
        {title: "name6", img: './img/logo-2.png'},
      ]

    return (
      <div className="container">
        <p>simple slider</p>
        <div>
        <Slider {...settings}>
          {items && items.map(item => {
            return (
              <div>
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            )
          })}
        </Slider>
        </div>
      </div>
    );
  }
export default SlideView;