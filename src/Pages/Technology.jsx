
import React,{useState} from 'react'
import axios from 'axios';



const Technology = () => {


    const[data,setData] =useState([])

    const getNews=() => {
    
    
    
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6f43be9f49cf4702b914421834ff3c3e")
    .then((response) => {
      console.log(response)
    
      setData(response.data.articles)
    
    })
    }

    return (
        <>
        
        <div className='container my-3'>
    
    <button className='btn btn-primary'
    
      onClick={getNews}
      >Technology News</button>
      
        </div>
        <div className='container'>
        <div className='row'>

       
    
        
           {
            data.map((value) => {
              return (
                <div className='col-3'>
    
            
    
                <div class="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"10px"}}>
                   <img src={value.urlToImage} class="card-img-top" alt="..."/>
                   <div class="card-body">
                     <h5 class="card-title">{value.title}</h5>
                     {/* <p class="card-text">{value.description}</p>
                     <a href="#" class="btn btn-primary">Main News</a> */}
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

export default Technology