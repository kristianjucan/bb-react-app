import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from "react-router-dom";
import './ProductPage.css'



function ProductPage(props) {

    const {id} = useParams()
    
    const [product, setProduct] = useState({});
    const {onAdd} = props;
    const [loading, setLoading] = useState(true)
    
   
   
    useEffect(() => {
  
      async function fetchProductsJSON() {
    
        const response =  await fetch(`https://fakestoreapi.com/products/${id}`)
        const products = await response.json()
        return products
        }
    
         fetchProductsJSON().then(products => {
            setProduct(products)
            setLoading(false)
            
            
        })
      },[id])

   function Element ()  {
       return (
        <div className='ProductPage'>
      
     
        <div className='ProductImage'>
        <img src={product.image} alt='item'/>
        </div>
        <div className='ProductDetails'>
          <div className='ProductDetailsMain'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        </div>
        <div className='ProductDetailsSecond'>
        
        <p>Price: {product.price}$</p>
        <Box
      sx={{
        '& > legend': { mt: 0 },
      }} 
    >
      <p >Rating:<Rating id='rating' name="read-only" value={product.rating.rate} size='small' readOnly /></p>
      
      
    </Box>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
   
        </div>
   
       </div>
       )
     }
     
    //  const memoItem = useMemo(Element, [product, setProduct]);
      
  return (

    <div>
      {loading? <p id='loading'>Loading...</p> : <Element/>}
    </div>
  )
}

export default ProductPage