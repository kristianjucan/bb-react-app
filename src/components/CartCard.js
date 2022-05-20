import React from 'react'
import './CartCard.css'
import {Link} from "react-router-dom";


 function CartCard(props) {
    const { cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    
    


  return (
     
    <div className='CartCard'>

        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div className='cartItem'>
              <div>{item.title}</div>
            <img src={item.image} alt='someText'/>
            <div><p>{item.price}$</p></div>
            
            
            <div className='cartButtons'>
              
              <button onClick={() => onAdd(item)} className="add">+
              </button>
              <div><p>{item.qty}</p></div>
              
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
        
          </div>
          
        ))}

          <div className='Total'>
            
            {itemsPrice > 1 && <p>Total: {itemsPrice.toFixed(2)}$</p>}
            
            {itemsPrice >1 &&<button><Link to='/checkout'>Place an oder</Link></button>}
          </div>

        </div>
        
        
    
  )
};

export default CartCard;

