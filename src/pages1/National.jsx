import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const National = () => {
  const[data,setData] =useState([])

  useEffect(() => {
  
  
  
  axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b4a2302a208d497c84c94fa9944caf08&q=india")
  .then((response) => {
    console.log(response)
  
    setData(response.data.articles)
  
  })
  },[])

  return (
      <>

   
      <div className='container my-3'>
  
  {/* <button className='btn btn-primary'
  
    onClick={getNews}
    >India News</button> */}

   
    
      </div>
      <div className='container'>
      <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>National</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>National</Tab>
    <Tab >POLITICS</Tab>
    <Tab >NORTH AND CENTRAL</Tab>
    <Tab >EAST AND NORTHEAST</Tab>
    <Tab> SOUTH</Tab>
    <Tab >WEST</Tab>
    
  </TabList>
  
</Tabs>
</div>
      <div className='row'>
         {
          data.map((value,index) => {
            return (
            
              <div className='col-3' key={index}>
  
              <div className="card" style={{width:  "18rem",margin: "10px",height:"300px",fontSize:"10px"}}>
                 <img src={value.urlToImage} className="card-img-top" alt="..."/>
                 <div className="card-body" style={{fontsize:""}}>
                 <Link to={`/national/${index}`}> <h5 className="card-title">{value.title}</h5></Link>
                   {/* <h5 className="card-title" >{value.title}</h5> */}
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