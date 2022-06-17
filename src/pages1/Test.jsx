import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
   
        const fetchProduct = async ()=>{
            if(id){
                let res = await fetch(`http://localhost:8080/national/${id}`)
                let data = await res.json()
                setProduct(data)
            }
        }
        fetchProduct()
    },[id])

    console.log(id)
  return (
    <div>
         <div>
      productId :{id}
      <div>{ `This is auther name  ${product.author}`}</div>
    </div>
      
    </div>
  )
}

export default Test
