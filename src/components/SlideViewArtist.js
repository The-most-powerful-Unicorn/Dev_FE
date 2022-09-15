import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../css-lib/SlideView.css';

import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SlideView(){
  const [artworks, setArtworks]= useState([]);
  const getArtwokrs = async () =>{
    const json =await (
      await fetch(
        'https://api.jaehyunking.com/artist/artistList'
      )
    ).json();
    setArtworks(json);
  };
  useEffect(()=>{
    getArtwokrs();
  },[]);

  console.log(artworks);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    width:100,
  };


  const state={
    display: true,
    width: 100,
  }
    return (
      <div className="Slide_Con">
        <div>
        <Slider {...settings}
        >
          {artworks && artworks.map(artworks => {
            return (
              <div
              key={artworks.artistNum}>
                <Link to={`/ArtistPage/${artworks.artistNum}`}>
                <img src={artworks.artistProfileImg} />
                </Link>
                <p>{artworks.artworkName}</p>
              </div>
            )
          })}
        </Slider>
        </div>
      </div>
    );
  }

  export default SlideView;