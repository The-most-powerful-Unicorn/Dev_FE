import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './css-lib/Header.css';
import React, { useEffect, useState } from "react";
import './css-lib/button.css';

import Home from './routes/Home';
import Header from "./Header";
import ArtistPage from'./routes/ArtistPage';
import ArtworkPage from "./routes/ArtworkPage";
import ArtistList from './routes/ArtistList';

export default function App() {
  return (

    <Router>
      <div>
     <Header />
     <Routes>
          <Route path='/ArtistList/' element={<ArtistList />} />
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

function Users() {
  return <h2>Users</h2>;
}