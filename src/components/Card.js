import './css/Card.css'
import React from 'react';

function Card (props) {
    return (
        <div className="card">
          <img className='image' src={props.img} alt="lodging img" />
          <p className='description'>
            {props.description}
          </p>
        </div>
    );
}

export default Card;
