import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const National = () => {
  const[data,setData] =useState([])

  useEffect(() => {
  
  if(data.length === 0){
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b4a2302a208d497c84c94fa9944caf08&q=india")
  .then((response) => {
    console.log(response)
  
    setData(response.data.articles)
  
  })



  }
  
  
  },[])

  return (
      <>

   
      <div className='container my-3'>
  
  {/* <button className='btn btn-primary'
  
    onClick={getNews}
    >India News</button> */}

   
    
      </div>
      <div className='container'>
  
      <div className='row'>
         {
          data.map((value) => {
            return (
            
              <div className='col-3'>
  
              <div className="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"15px"}}>
                 <img src={value.urlToImage} className="card-img-top" alt="..."/>
                 <div className="card-body" style={{fontsize:""}}>
                   <h5 className="card-title" >{value.title}</h5>
                </div>
      </div>
      
              </div>
            );
          })
         }
  
        </div>
      </div>
      
      
      </>
    );
}

export default National