import '../App.css';
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import ReactPageScoller from "react-page-scroller";

import '../css-lib/button.css';
import '../css-lib/Scroll.css';
import '../css-lib/Home.css';

import SlideView from '../components/SlideView';
import SlideViewArtist from '../components/SlideViewArtist';

import Footer from '../Footer';


const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

function ScrollComponent() {
  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
  // Once the scrollToElement function is run, the scroll will show the element
  return (
    <>
      <div ref={testRef}>Element you want to view</div>
      <button onClick={scrollToElement}>Trigger the scroll</button>
    </>
  );
}

function Home() {

  const [artworks, setArtworks] = useState([]);
  const getArtwokrs = async () => {
    const json = await (
      await fetch(
        'http://15.164.134.237:8080/artwork/list'
      )
    ).json();
    setArtworks(json);
  };
  useEffect(() => {
    getArtwokrs();
  }, []);

  return (

    <div>

      <ReactPageScoller
        animationTimer={500}
      >
        <div className='block bg_img'>
          <div className='bg_black'>
            <div className="space_empty"></div>
            <div className='item item1'>
              <h1 className='subject'>
                지금, 내 집에 걸어 놓을 수 있는<br />
                <b>제주 로컬 미술작품</b>을 만나보세요
              </h1>
              <Link to='/artWorks'>
                <div
                  className="btn-btn-yellow"
                >작품 더보기</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="block2">
          <div className="space_empty"></div>
          <h1 className='subject2'>
            집에서 <b>예술</b>을 즐기는 가장 <b>쉬운</b> 방법
          </h1>
          <div className="bgDU"
            style={{
              width: "25vw"
            }} >
            <Link to='/About'>
              <span className="mask">
                <img
                  src="/img/Gogh-Starry-Night.jpg"
                  style={{
                    width: "25vw"
                  }} />
                <span className="cap">text</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="block bg_white">
          <div className="space_empty"></div>
          <div className="containerContainer2">
            <h1 className='subject3'>
              제주 신예 작가들의<br />개성 넘치는 그림
            </h1>
            {/* <p className="subject3-2">
              #여름, #바다, #블루
            </p> */}
          </div>
          <div className="item3 slide_view2">
            <SlideView
            />
            <div className="item"></div>
          </div>
        </div>
        <div className="block bg_white">
          <div className="space_empty"></div>
          <h1 className='subject4'>지금<br />주목해야 할 <b>작가</b></h1>
            <div className='mainArtist' >
              <div>
                <Link to='/ArtistPage/2'><img className='mainArtistImg1' src='../img/mainArtist1.jpg'></img></Link>
              </div>
              <div>
                <Link to='/ArtistPage/1'><img className='mainArtistImg2' src='../img/mainArtist2.png'></img></Link>
              </div>
              <div>
                <Link to='/ArtistPage/3'><img className='mainArtistImg3' src='../img/mainArtist3.png'></img></Link>
              </div>
            </div>
            
          <div className="">
            {/* <div className="item slide_view">
              <SlideViewArtist />
            </div> */}
          </div>
        </div>
        <Footer />
      </ReactPageScoller>
    </div>

  );
};
export default Home;
