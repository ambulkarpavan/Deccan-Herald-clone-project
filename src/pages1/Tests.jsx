
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Tests = () => {
    const [products,setProducts] = useState([])

    const fetchProducts = async ()=>{
        let res = await fetch(`http://localhost:8080/national`);
        let d = await res.json()
        setProducts(d)
         }
   
   
         useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <div>

<div>
      
      Products:
      {products.map((p)=>{
        
          return <div key={p.id}>
             <Link to= {`/tests/${p.id}`}>{p.author}</Link>
          </div>
      })}
    </div>
      
    </div>
  )
}

export default Tests
