import React from 'react'
import './Checkout.css'

function Checkout(props) {
    const {onAdd, onRemove, cartItems} = props
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);


  return (
    <div className='checkout'>
        <h2>Checkout</h2>
    <div className='checkout-items'>

        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
    <div className='checkoutItem'>
        <img src={item.image} alt='someText'/>
      <div>{item.title}</div>
    
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
    
    {itemsPrice >1 &&<button>Send Order</button>}
  </div>

</div>
    </div>
  )
}

export default Checkout