import React from 'react';
import './css/Itenary.css';
import beauty from '../img/beauty-parlor.jpeg';
import tiramisu from '../img/tiramisu_superbad.png';
import acting from '../img/acting_school.webp';
//import { Component } from 'react';
import Card from '../components/Card';

function Itenary() {

  const beautyDescription = 'Enjoy Day One: Start by taking yourself to the beauty parlor to be beautiful as the stars, re-create your favorite looks from your favorite films Legally Blonde'
  const tiramisuDescription = 'Enjoy Day Two: Have food from your facorite movies such as the failed timarisumu from Superbad '
  const actingDescription = 'Enjoy Day Three: Start by taking a rode by enjoying the acting school - working with actors to recreate special scences from Mean Girls. You are the star'

  return (
    <div>
      <div className='header-wrapper'>
        <div className='header'>How Can You Spend Your Time?</div>
        <div className='subheader'>Your Itenary</div>
      </div>
      <div className='content-wrapper'>
        <Card img={beauty} description={beautyDescription}/>
        <Card img={tiramisu} description={tiramisuDescription}/>
        <Card img={acting} description={actingDescription}/>
      </div>
    </div>
  );
}

export default Itenary;


// function Attractions() {

//   const beautyDescription = 'Enjoy Day One: Start by taking yourself to the beauty parlor to be beautiful as the stars, re-create your favorite looks from your favorite films Legally Blonde'
//   const tiramisuDescription = 'Enjoy Day Two: Have food from your facorite movies such as the failed timarisumu from Superbad '
//   const actingDescription = 'Enjoy Day Three: Start by taking a rode by enjoying the acting school - working with actors to recreate special scences from Mean Girls. You are the star'

//   return (
//     <div>
//       <div className='header-wrapper'>
//         <div className='header'>Rides</div>
//         <div className='subheader'>Your Itenary</div>
//       </div>
//       <div className='content-wrapper'>
//         <Card img={beauty} description={beautyDescription}/>
//         <Card img={tiramisu} description={tiramisuDescription}/>
//         <Card img={acting} description={actingDescription}/>
//       </div>
//     </div>
//   )
// }

// export default Attractions