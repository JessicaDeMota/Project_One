
import './App.css';

import Homepage from './pages/Homepage';
import Rides from './pages/Rides';
import Itenary from './pages/Itenary';
import Visit from './pages/Visit';


import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';
import NavBar from './components/NavBar';
import Book from './components/Book';


export default function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/rides" element={<Rides/>} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/itenary" element={<Itenary/>} />
          <Route path="/book" element={<Book/>} />
      </Routes>
    </div>
  );
}




// import './App.css';

// import Homepage from './pages/Homepage';
// import Rides from './pages/Rides';
// import Itenary from './pages/Itenary';
// import Visit from './pages/Visit';

// import { Routes, Route} from "react-router-dom";
// import React from 'react';
// import NavBar from './components/NavBar';
// import Book from './components/Book';


// export default function App() {
//   return (
//     <div className="App">
//     <NavBar/>
//       <Routes>
//           <Route path="/" index element={<Homepage />} />
//           <Route path="/rides" element={<Rides/>} />
//           <Route path="/visit" element={<Visit />} />
//           <Route path="/itenary" element={<Itenary />} />
//           <Route path="/book" element={<Book />} />
//         </Routes>
//       </Routes>
//     </div>
//   );
// }

