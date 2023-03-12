import './App.css';

import Homepage from './pages/Homepage';
import Rides from './pages/Rides';
import Attractions from './pages/Attractions';
import Visit from './pages/Visit';

import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/rides" element={<Rides/>} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/attractions" element={<Attractions/>} />
      </Routes>
    </div>
  );
}

