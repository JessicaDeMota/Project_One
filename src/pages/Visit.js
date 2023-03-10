import React from 'react'
import universal_studios from '../img/universal_studios_map.png';
import "./css/Visit.css";



function Visit() {

  function buyNowClick() {
    window.location.href = 'https://www.universalorlando.com/web/en/us/tickets-packages/offers/ous-offer?__source=uor..pous..cuo..ps..psra..dr..aist..saint..satip..cuors..thrl..pdt..thpt..ofr..brd..len..20230202..off23B3G2T1&gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPLd2UtEQ-KkG7c2pUykfCqLRnckXzsjqbPeRJk63auWV8jLBNwO4JQaAtJfEALw_wcB&gclsrc=aw.ds';
  }
  return (
    <div>
      <div className='map-wrapper'>
        <img className='universal-img' src = {universal_studios}>
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
      <div className='awesome-div'>
        <h1>Get 5 Days of Awesome for the Price of 3 with a 2-Park, 3-Day Ticket*</h1>
        <p>Enjoy five days of thrills at Universal Studios Florida and Universal’s Islands of Adventure when you purchase a 2-Park, 3-Day ticket. Add Universal’s Volcano Bay for just $35 more and experience all three amazing Universal Orlando Resort theme parks.</p>
      </div>
      <div className='price-picture-div'>
        <img src='https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-velocicoaster-ride-guest%E2%80%94boys-enter-entrance-c.jpg' alt='logo' />
        <div className='ticket-offer' >
          <h1>Ticket Offer Details</h1>
          <p>*Ticket prices and availability vary by day. Restrictions apply</p>
          <p>*Ticket prices and availability vary by day. Restrictions apply</p>
        </div>
        <div className='buy-now' >
          <p>From</p>
          <h1>$234.99</h1>
          <p>2-Park, 3-Day + 2 Days Free*</p>
          <p>plus tax, per adult</p>
          <button onClick={buyNowClick}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Visit

