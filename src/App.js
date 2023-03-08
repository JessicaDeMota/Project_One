import './App.css';

import Homepage from './components/Homepage';
import Rides from './components/Rides';
import Attractions from './components/Attractions';
import Visit from './components/Visit';

import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="rides" element={<Rides/>} />
          <Route path="visit" element={<Visit />} />
          <Route path="attractions" element={<Attractions/>} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>    </div>
  );
}
const navStyle = {textDecoration: "none", color: "blue"};
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/lodging">Lodging</Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

