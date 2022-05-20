import React, {useState, useEffect, useMemo} from "react"
import './ProductCard.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import  Box  from "@mui/material/Box";











function ProductCard(props){

    const [responseData, setResponseData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState();
    const {onAdd} = props;
    const [value, setValue] = React.useState();
    

 
useEffect(() => {
  
  async function fetchProductsJSON() {

    const response =  await fetch('https://fakestoreapi.com/products?limit=16')
    const products = await response.json()
    return products
    }

     fetchProductsJSON().then(products => {
        setResponseData(products)
        setLoading(false)
    })
            
  },[])

  
// Facem un filtru bazat pe cateogrie pentru produse
function getFilteredList() {
  if (!selectedCategory) {
    return responseData;
  }
  return responseData.filter((item) => item.category === selectedCategory);
}

function handleCategoryChange(event) {
  setSelectedCategory(event.target.value);
  
}

const filteredList = useMemo(getFilteredList, [selectedCategory, responseData]);
//Folosim useMemo pentru a nu face randari repetitive decat daca una dintre dependinte este modificata


 const allProducts = filteredList.map((item) => {
   return (
     
    
        
        
      

    
  <div className='product' id={item.id}  >
    <Link to={`/product-page/${item.id}`} id='route-link' key={uuidv4()}>
    <img src={item.image} alt='someText'/> 
    </Link>
    <div>
    <Link to={`/product-page/${item.id}`} id='route-link' key={uuidv4()}>
    <p>{item.title}</p> 
    <p>{item.price}$</p>
    
    
    <Box
      sx={{
        '& > legend': { mt: 0 },
      }} 
    >
      <p >Rating:<Rating id='rating' name="read-only" value={item.rating.rate} size='small' readOnly /></p>
      
      
    </Box>
    </Link>
    </div>
    
    <div className="product-buttons">
    <button onClick={()=> onAdd(item)}><AddShoppingCartIcon /></button>
    
    </div>
    
    </div>
   
    
    
    )});


   

    

  return (
    
    <div className="ProductCard">
      

      <div className='categorySelector'>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women`s clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>

    

    <div className='products'>
       
       
       
        {loading ? <p>Products on their way...</p> : allProducts}
       
    </div>
    
    

    
    </div>
    
  );

}

export default ProductCard;