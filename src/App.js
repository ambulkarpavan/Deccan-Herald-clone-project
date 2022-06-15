import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Home from './Pages/Home';



function App() {
  return (
    <> 
    <div className='App'>
    
        <Home/>
        <Footer/>
        </div>
    </>
  );
}

export default App;
