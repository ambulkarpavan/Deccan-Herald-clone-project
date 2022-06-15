import React,{useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

const Us = () => {


  const[data,setData] =useState([])

    const getNews=() => {
    
    
    
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b4a2302a208d497c84c94fa9944caf08")
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
      >US News</button>
        </div>
        <div className='container'>
    
        <div className='row'>
           {
            data.map((value) => {
              return (
              
                <div className='col-3'>
    
                <div class="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"10px"}}>
                   <img src={value.urlToImage} class="card-img-top" alt="..."/>
                   <div class="card-body" style={{fontsize:""}}>
                     <h5 class="card-title" >{value.title}</h5>
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

export default Us