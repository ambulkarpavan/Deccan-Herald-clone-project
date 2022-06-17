
import React,{useEffect, useState} from 'react'
import axios from 'axios';



const Entertentment = () => {


    const[data,setData] =useState([])

    useEffect(() => {
      if(data.length === 0){

        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6f43be9f49cf4702b914421834ff3c3e")
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
      > ENtertenment News</button> */}
      
        </div>
        <div className='container'>
        <div className='row'>

       
    
        
           {
            data.map((value) => {
              return (
                <div className='col-3'>
    
            
    
                <div className="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"10px"}}>
                   <img src={value.urlToImage} className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">{value.title}</h5>
                     {/* <p className="card-text">{value.description}</p>
                     <a href="#" className="btn btn-primary">Main News</a> */}
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

export default Entertentment