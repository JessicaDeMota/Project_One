import React, { useState } from "react";
import DatePicker from "./DatePicker";
import DropdownMenu from "./DropDownMenu";


function Book() {
  const [clicked, setClicked] = useState(false);


  function handleHotelClick() {
    setClicked((prev) => !prev);
    console.log(clicked);
  }

  function handleSearchClick() {
    window.location.href = "https://www.universalorlando.com/web/en/us/tickets-packages/offers/ous-offer?__source=uor..pous..cuo..ps..psra..dr..aist..saint..satip..cuors..thrl..pdt..thpt..ofr..brd..len..20230202..off23B3G2T1&gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPLd2UtEQ-KkG7c2pUykfCqLRnckXzsjqbPeRJk63auWV8jLBNwO4JQaAtJfEALw_wcB&gclsrc=aw.ds"
  }

  return (
    <div className="vacation-package">
      <h1>Start Your Vacation Package</h1>
      <div className="bookit">
        <div className="buttons-book">  
          <button onClick={handleHotelClick}>HOTEL + TICKETS</button>
          <button>FLIGHTS + HOTEL + TICKETS</button>
        </div>
        <div className="dates-rooms-div">
          <div>
            <p>Travel Dates</p> 
            <DatePicker />
          </div>
          <div>
            <p>How Many Rooms</p>
            <DropdownMenu />
          </div>
          <button onClick={handleSearchClick} className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
