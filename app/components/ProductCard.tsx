'use client'
import React from 'react'


const ProductCard = () => {
  return (
    <div className='card card-body bg-primary    ' >
    <div className='card-title text-accent-content '>ProductCard</div>
    <button className='btn btn-warning btn-lg' onClick={() => {console.log('click');
    }}>Click me</button>
    </div>
  )
}

export default ProductCard