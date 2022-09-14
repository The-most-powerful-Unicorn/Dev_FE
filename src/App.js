import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './css-lib/Header.css';
import React, { useEffect, useState } from "react";
import './css-lib/button.css';


import Header from './Header';

import Home from './routes/Home';
import Header from "./Header";
import ArtistPage from'./routes/ArtistPage';
import ArtworkPage from "./routes/ArtworkPage";
import ArtistList from './routes/ArtistList';
import ArtWorks from "./routes/ArtWorks";


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

