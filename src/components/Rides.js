import './css/Rides.css';
import rescue from '../img/rescue_boats.jpeg';
import astroworld from '../img/astro_world_coster.webp';
import jaws from '../img/jaws_seaworld.jpeg';
import React, { Component }  from 'react';

import Card from './Card';

const description = `.`

function Rides() {
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Rides</h1>
        <h3> Ready for a Fun Adventure</h3>
      </div>
      <div className="boxes">
        <Card img={description} description={description} />
        <div className = "Adventureland">
          <img src = {rescue} alt = "Rescue" />
          <p>
            Thrill Meter : 7/10
            Location In Park : Adventureland
            History : Live from Adventureland movie
          </p>
        </div>
        <div className="Astroworld">
          <img src={astroworld} alt="Astroworld" />
          <p>
            Thrill Meter : 10/10
            Location In Park : Stormi Corner 
            History : Live from Astroworld 
          </p>
        </div>
        <div className="Jaws">
          <img src={jaws} alt="Jaws" />
          <p>
            Thrill Meter: 6/10
            Location In Park: Swim With Sea
            Histoy: Stay Beware of Sharks ! Watch for sharks and other seacreatures. 
            As seen in 1983 in the Seaworld movie this is swim with sea.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Rides;
