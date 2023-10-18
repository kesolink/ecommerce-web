"use client"
import React, { useEffect, useState } from 'react'
import Products from './Products'

async function getData(){
    const res= await fetch('https://fakestoreapi.com/products')
    if(!res.ok){
        throw new Error("failed to fetch the data")
    }
    return res.json()
}

function ProductFeed() {
    const [product, setProduct]= useState([])
    useEffect(()=>{
        async function fetchData(){
            try{
               const data= await getData() 
               setProduct(data)
    
            }catch(error){
                console.log("erroe fetching data", error)
        
            }
        }
        
        fetchData()
        
    }, [])
    console.log(product)
    
  return (
    <div className='mx-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5'>
        {product?.map((item, index)=>
        <Products item={item} key={index} />
        )}
        
    </div>
  )
}


export default ProductFeed