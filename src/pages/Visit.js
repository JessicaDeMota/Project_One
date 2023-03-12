
import React from 'react'
import universal_studios from '../img/universal_studios_map.png';
import "./css/Visit.css";



function Visit() {
  return (
    <div>
      <div className='map-wrapper'>
        <img src = {universal_studios}>
         </img>
      </div>
      <div className='info-wrapper'>
        <div className='box'>
        </div>
        <div className='box'>
        </div>
        <div className='box'>
        </div>
      </div>
    </div>
  )
}

export default Visit
