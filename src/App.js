import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './css-lib/Header.css';
import React, { useEffect, useState } from "react";
import './css-lib/button.css';

<<<<<<< HEAD
import SlideView from './SlideView';
import Header from './Header';
import Footer from './Footer';
=======
import Home from './routes/Home';
import Header from "./Header";
import ArtistPage from'./routes/ArtistPage';
import ArtworkPage from "./routes/ArtworkPage";
import ArtistList from './routes/ArtistList';
import ArtWorks from "./routes/ArtWorks";
>>>>>>> feature_jang

export default function App() {
  return (

    <Router>
      <div>
     <Header />
     <Routes>
          <Route path='/artistList' element={<ArtistList />} />
        </Routes>
        <Routes>
          <Route path='/artWorks' element={<ArtWorks />} />
        </Routes>
        <Routes>
          <Route path='/ArtistPage/:id' element={<ArtistPage />} />
        </Routes>
        <Routes>
          <Route path='/ArtworkPage/:id' element={<ArtworkPage />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
function About() {
  return <h2>About</h2>;
}

<<<<<<< HEAD


function App() {
  const { y } = useScroll();
  return (
    
    
    <div className='App' style={{backgroundAttachment:"fixed" }}>
      <Header />
    
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
      <ScrollComponent />    
    </section>
    <Footer />
      
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
=======
function Users() {
  return <h2>Users</h2>;
}
>>>>>>> feature_jang
