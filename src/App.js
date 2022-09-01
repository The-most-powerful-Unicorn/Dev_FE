import './App.css';
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Link, Button, Element, Events, animateScroll as Scroll, scrollSpy, scroller } from 'react-scroll'

import './css-lib/button.css';
import './css-lib/Scroll.css';

import SlideView from './SlideView';
import Header from './Header';

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

function App() {

  const { y } = useScroll();
  return (
    <div className='App scrollWrap' style={{ backgroundAttachment: "fixed" }}>
      <Header />

      <Link
        to="s_1"
        smooth="true"
        class="btn"
        duration="300"
        style={{
          display: y > 100 ? "" : "none",
          position: "fixed",
          right: "0px",
          top: "70vh",
        }}>
        <img src="./img/upBtn.png"
          style={{ width: "5vh" }} />
      </Link>

      <section id="s_1" class="cont">

        <img class="img_1" src="./img/Gogh-Starry-Night.jpg" style={{
          transition: "0.5s",
          width: y > 100 ? "30%" : "100%",
          position: "fixed",
          transform: "translate(-50%, -15%)",
        }} />
        <div class="scrolldown1"
          style={{
            display: y > 100 ? "none" : ""
          }}><span>Scroll</span></div>

      </section>
      <section id="s_2" class="cont">
      </section>
      <section id="s_3" class="cont container">
        <h1>뜨거운 여름,</h1>
        <h1>보기만해도 시원한 그림</h1>
        <SlideView />
      </section>
      <section id="s_4" class='cont container'>
        <SlideView />
        <br /><br />


      </section>
    </div>
  );
};
export default App;
