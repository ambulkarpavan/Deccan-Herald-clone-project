import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Home from './Pages/Home';
import  Navbar  from './Components/Navbar';

import Entertentment from './Pages/Entertentment';
import Business from './pages1/Business';
import National from './pages1/National';
import Science from './pages1/Science';
import Technology from './pages1/Technology';
import Us from './pages1/Us';
import Sport from './pages1/Sport';

import Tests from './pages1/Tests';
import Test from './pages1/Test';
import TopData from './Pages/TopData';



function App() {
  return (
    <> 
    <div className='App'>
    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/entertentment' element={<Entertentment />} />
      <Route path='/business' element={<Business />} />
      <Route path='/national' element={<National />} />
      <Route path='/science' element={<Science />} />
      <Route path='/technology' element={<Technology />} />
      <Route path='/us' element={<Us />} />
      <Route path='/sport' element={<Sport />} />
      
      <Route path ="/national/*" element = { <Tests/>} />
      <Route path =":id" element = { <Test/>} />
    </Routes>
        
        <Footer/>
        </div>
      
      
    </>
  );
}

export default App;
