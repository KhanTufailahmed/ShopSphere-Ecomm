import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PrdoductDetails = () => {
  const {id}=useParams()
  const products=useSelector((state)=>state.product)
  const [product,setProduct]=useState(null)
  useEffect(()=>{
    const newProduct=products.find(product=>product.id===parseInt(id))
    setProduct(newProduct)
  },[id])
  return (
    <div>
      {console.log(product?.id)}
    </div>
  )
}

export default PrdoductDetails
