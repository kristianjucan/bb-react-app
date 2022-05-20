import React from "react";
import CartCard from "./CartCard";
import useToggle from "./useToggleState";
import './ShoppingCart.css'
import cart from '../images/cart.png'



function ShoppingCart(props) {
       const [showCart, setShowCart] = useToggle(false) 
       const { cartItems, onAdd, onRemove} = props;

       const itemsBubble =  cartItems.map((item)=> {
         return (
         item.qty
         )

       })

       const totalItems = itemsBubble.reduce((a, b) => a + b, 0)

    return(
        
       <div>
          <div className='YourCart'>
          <button onClick={setShowCart}>
          <img src={cart} alt='cart-icon' />
          
             Shopping Cart
             <div className="itemsBubble">{totalItems}</div>
             </button>
          </div>
          {showCart && <CartCard cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}
       </div>
      
           
      
       
    );
}

export default ShoppingCart;