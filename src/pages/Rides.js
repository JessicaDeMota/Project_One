import './css/Rides.css';
import rescue from '../img/rescue_boats.jpeg';
import harry from '../img/Harry-Potter.jpeg';
import jaws from '../img/jaws_seaworld.jpeg';
import React, { Component }  from 'react';

import Card from '../components/Card';

function Rides() {

  const rescueDescription = 'Thrill Meter : 7/10 \n Location In Park : Adventureland \n History : Live from Adventureland movie'
  const harryDescription = 'Thrill Meter : 10/10 \nLocation In Park : Slugs Corner\nHistory : Live from The Basement'
  const jawsDescription = 'Thrill Meter: 6/10\nLocation In Park: Swim With Sea\nHistoy: Stay Beware of Sharks ! Watch for sharks and other seacreatures.\nAs seen in 1983 in the Seaworld movie this is swim with sea.'

  return (
    <div>
      <div className='header-wrapper'>
        <div className='header'>Rides</div>
        <div className='subheader'>Ready for a Fun Adventure</div>
      </div>
      <div className='content-wrapper'>
        <Card img={rescue} description={rescueDescription}/>
        <Card img={harry} description={harryDescription}/>
        <Card img={jaws} description={jawsDescription}/>
      </div>
    </div>
  )
}

export default Rides



// function Rides() {
//   return (
//     <div className='main'>
//       <div className='header'> 
//         <h1>Rides</h1>
//         <h3> Ready for a Fun Adventure</h3>
//       </div>
//       <div className="boxes">
//         <Card img={description} description={description} />
//         <div className = "Adventureland">
//           <img src = {rescue} alt = "Rescue" />
//           <p>
//             Thrill Meter : 7/10
//             Location In Park : Adventureland
//             History : Live from Adventureland movie
//           </p>
//         </div>
//         <div className="Astroworld">
//           <img src={astroworld} alt="Astroworld" />
//           <p>
//             Thrill Meter : 10/10
//             Location In Park : Stormi Corner 
//             History : Live from Astroworld 
//           </p>
//         </div>
//         <div className="Jaws">
//           <img src={jaws} alt="Jaws" />
//           <p>
//             Thrill Meter: 6/10
//             Location In Park: Swim With Sea
//             Histoy: Stay Beware of Sharks ! Watch for sharks and other seacreatures. 
//             As seen in 1983 in the Seaworld movie this is swim with sea.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


