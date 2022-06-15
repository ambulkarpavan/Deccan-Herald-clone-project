// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import EntertainmentDetails from './pages/EntertainmentDetails';

import  {Home}  from './pages/Home';
import National from './pages/National';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Us from './pages/Us';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/national' element={<National />} />
      <Route path='/entertainment' element={<Entertainment />} />
      {/* <Route path='/entertainment/:uuidv4()' element={<EntertainmentDetails />} /> */}
      <Route path='/technology' element={<Technology />} />
      <Route path='/us' element={<Us />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/business' element={<Business />} />
      <Route path='/science' element={<Science />} />

    
    </Routes>
    </div>
  );
}

export default App;
