import './App.css';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, animateScroll as Scroll } from "react-scroll";
import './css-lib/button.css';

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

function App() {
  const { y } = useScroll();
  return (
    
    
    <div className='App' style={{backgroundAttachment:"fixed" }}>
        
    <section id="s_1">
        <br/><br/><br/>
        <img class="img_1" src="./img/Gogh-Starry-Night.jpg" style={{ 
        transition: "0.5s",
        width: y > 100 ? "30%" : "100%",
        position:"fixed",
        transform:"translate(-50%, -10%)",
        }} />
        <div class="scrolldown1"　
      style={{
        display: y> 100? "none": ""
      }}><span>Scroll</span></div>
    </section>
    <section id="s_2">
    </section>
    <section id="s_3"class="container">
      <h1>뜨거운 여름,</h1>
      <h1>보기만해도 시원한 그림</h1>
      <SlideView />
    </section>
    <section id="s_4" class='container'>
      <SlideView />
    </section>
      
      {/* <Header />
      <p>
      <img style={{ 
        transition: "0.5s",
        width: y > 100 ? "110%" : "30%",
        position:"fixed",
        transform:"translate(-50%, -10%)",
        }} src="./img/Gogh-Starry-Night.jpg" />
      </p>
      <div class="scrolldown1"　
      style={{
        display: y> 100? "none": ""
      }}><span>Scroll</span></div>
        <img 
        style={{
          width: "5%",
          transition: "0.5s",
          display: y >100? "":"none",
          position: "fixed",
          top:"70vh",
          right:"0px"}}
        src="./img/upBtn.png"></img>
        <div class="bl-filter">

        </div>
            <div id="container">
              <SlideView />
            </div> 
            <div id="container">
              <SlideView />
            </div>  */}
    </div>


  );
};
export default App;
