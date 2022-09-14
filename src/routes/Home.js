import '../App.css';
import React, { useEffect, useState, useRef } from "react";
import {Link} from'react-router-dom';
import ReactPageScoller from "react-page-scroller";

import '../css-lib/button.css';
import '../css-lib/Scroll.css';

import SlideView from '../components/SlideView';
import SlideViewAuto from '../components/SlideViewAuto';
import SlideViewArtist from'../components/SlideViewArtist';


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

  const [artworks, setArtworks]= useState([]);
  const getArtwokrs = async () =>{
    const json =await (
      await fetch(
        'http://15.164.134.237:8080/artwork/list'
      )
    ).json();
    setArtworks(json);
  };
  useEffect(()=>{
    getArtwokrs();
  },[]);

  return (

    <div>

      <ReactPageScoller
        animationTimer={500}
      >
        <div className='block bg_img'>
          <div className='bg_black'>
            <div class="space_empty"></div>
            <div class='item item1'>
              <h1 className='subject'>
                지금, 내 집에 걸어 놓을 수 있는<br />
                <b>제주 로컬 미술작품</b>을 만나보세요
              </h1>
              <a href=""
                class="btn-btn-yellow"
              >작품 더보기</a>
            </div>
          </div>
        </div>

        <div className="block2">
          <div class="space_empty"></div>
          <h1 className='subject2'>
            집에서 <b>예술</b>을 즐기는 가장 <b>쉬운</b> 방법
          </h1>
          <div class="bgDU"
                            style={{
                              width: "25vw"
                            }} >
            <span class="mask"
            >
              <a href="">
                <img
                  src="/img/Gogh-Starry-Night.jpg"
                  style={{
                    width: "25vw"
                  }} />
                  <span class="cap">text</span>
              </a>
            </span>
          </div>
        </div>
        <div className="block bg_white">
          <div class="space_empty"></div>
          <div class="container container2">
            <div class="item">
              <h1 className='subject3'>뜨거운 여름,<br />보기만 해도 시원한 그림.</h1>
            </div>
            <div class="item item_RightUnder">
              #태그1, #태그2, #태그3
            </div>
          </div>
          <div class="item3 slide_view">
            <SlideView
            />
            <div class="item"></div>
          </div>
        </div>
        <div className="block bg_white">
          <div class="space_empty"></div>

            <h1 className='subject4'>지금<br />주목해야 할 <b>작가</b></h1>

          <div class="">
            <div class="item slide_view">
              <SlideViewArtist />
            </div>
          </div>
        </div>
      </ReactPageScoller>
    </div>

  );
};
export default Home;
