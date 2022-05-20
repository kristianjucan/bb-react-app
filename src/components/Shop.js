import React from 'react'
import ProductCard from './ProductCard'
import ImageSlider from './imageSlider'




function Shop(props) {
   
    const {onAdd, cartItems, onRemove} = props;

  return (
    <div>
        <ImageSlider />
        
        <ProductCard onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
        
    </div>
  )
}

export default Shop