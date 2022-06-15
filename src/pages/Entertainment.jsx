import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Entertainment.modules.css"
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4())

const Entertainment = () => {
    const [global, setGlobal] = useState([]);


     useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=entertainment&from=2022-05-15&sortBy=publishedAt&apiKey=a2b079c8bd484bafb175ea65460c5360")
        .then((r)=>{
          
            //console.log(r.data.articles)
      
            setGlobal(r.data.articles)
            // let x=r.data.articles
            // console.log(x)
            // let {source:{name}}=x
            // console.log(name, "this is")
        })
    },[])
  return (
    <div className='global_container' >
        {/* {global.map((gol)=>(
            <div>
            <img src={gol.urlToImage}/>
            <div>{gol.title}</div>
            </div>

        ))} */}
        
 {global.map((gol)=>(
 <>
 {console.log(gol.source.name, "this is name")}
  <div key={uuidv4()} >
<div className="card" style={{width: "18rem"}} >
  <img src={gol.urlToImage} className="card-img-top" />
  <div className="card-body" >
   <Link to={`/entertainment/${uuidv4()}`}> <h5 className="card-title">{gol.title}</h5></Link>
   
    <a href="#" className="btn btn-primary">More</a>
  </div>
</div>
</div>
</>
))}
    </div>
  )
}

export default Entertainment