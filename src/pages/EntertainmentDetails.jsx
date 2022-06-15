import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const EntertainmentDetails = () => {
  const [enterDet, setEnterDet] = useState({})
  const {title} = useParams();
  //console.log()

  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=entertainment&from=2022-05-15&sortBy=publishedAt&apiKey=a2b079c8bd484bafb175ea65460c5360/${title}`)
    .then((r)=>{
      
        console.log(r)
  
        setEnterDet(r.data.articles)
    })
},[title])
  return (
    <div>
      <div>
      {enterDet.title}
      </div>
      <div>
        <img src={enterDet.urlToImage} alt="" />
      </div>
      <div>
          {enterDet.description}
      </div>
    </div>
  )
}

export default EntertainmentDetails