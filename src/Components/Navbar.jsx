import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Navbar.modules.css"
import img from "./deccan logo(291).png"
import {Link} from "react-router-dom"
// import { AiOutlineAlignRight } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='navbar_container'>
      <div  className='navbar_containerA' >
      <div  className='navbar_container1'>
        <img src={img} style={{width:"160px"}} />
      </div>
      {/* <div>
        <AiOutlineAlignRight style={{width:"100px"}}/>
      </div> */}
      <div className='navbar_container2'>
      <Link to="/" className="btn">Home</Link>
      <Link to="/national" className="btn">National</Link>
      <Link to="/entertentment" className="btn">Entertentment</Link>
      <Link to="/technology" className="btn">Technology</Link>
      <Link to="/us" className="btn">Us</Link>
      <Link to="/sport" className="btn">Sport</Link>
      <Link to="/business" className="btn">Business</Link>
      <Link to="/science" className="btn">Science</Link>


        {/* <button type="button" className="btn">Home</button> */}
        {/* <button type="button" className="btn">Global</button> */}
        {/* <button type="button" className="btn">National</button>
        <button type="button" className="btn">Sports</button>
        <button type="button" className="btn">Business</button>
        <button type="button" className="btn">Entertainment</button>
        <button type="button" className="btn">Science & Env</button>
        <button type="button" className="btn">Videos</button> */}
         {/* <button type="button" className="btn">Specials</button> */}

    </div>
    <div className='navbar_container3'>
      <p style={{color:"red"}}>News</p>
      <p>Newsletters</p>
    {/* <button type="button" className="btn btn-link">News</button>
    <button type="button" className="btn btn-link">Newsletters</button> */}

    </div>
    
    </div>
    </div>
  )
}

export default Navbar