import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Technology = () => {


    const[data,setData] =useState([])

    useEffect(() => {
     
      if(data.length ===0){
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6f43be9f49cf4702b914421834ff3c3e")
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
      >Technology News</button> */}
      
        </div>
        <div className='container'>
        <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Technology</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Technology</Tab>
    <Tab >NEWST</Tab>
    <Tab >LERNABLE</Tab>
    <Tab >HIKE</Tab>
    <Tab> EXACT </Tab>
    
    
  </TabList>
  
</Tabs>
</div>
        <div className='row'>

       
    
        
           {
            data.map((value,index) => {
              return (
                <div className='col-3' key={index}>
    
            
    
                <div className="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"15px"}}>
                   <img src={value.urlToImage} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <Link to={`/technology/${index}`}> <h5 className="card-title">{value.title}</h5></Link>
                     {/* <h5 className="card-title">{value.title}</h5> */}
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

export default Technology