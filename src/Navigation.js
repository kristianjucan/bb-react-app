import React from 'react';
import './Navigation.css'
import betterBuy from '../src/images/better_buy-transparent.png'
import ShoppingCart from './components/ShoppingCart';
import useToggle from "./components/useToggleState";
import {Link} from "react-router-dom";
import {UserAuth} from '../src/components/AuthContext'








function Navigation (props) {


    const [isOpen, setIsOpen] = useToggle(false)  
    
    const { cartItems, onAdd, onRemove} = props;

    const {user, logOut} = UserAuth()

   const handleSignOut = async () => {
    try {
        await logOut()
    } catch(err) {
      console.log(err)
    }
   }
   



return(
    <div className='Navbar'>
        <div className='Links'>
            
            <Link to='/'><img id='logo' src={betterBuy} alt='logo'/> </Link>
            <Link to='/contact' id='dissapear'>Contact</Link>
            <Link to='/about' id='dissapear'>About Us</Link>
            {user ?.displayName ? <button id='login-logout' onClick={handleSignOut}>Logout</button> : <Link to='/sign-in' id='dissapear'>Login</Link> }
            
          
            
            
            <ShoppingCart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />

            <div className='collapsible'>
              <button onClick={setIsOpen}>Menu</button>
              <div className={isOpen ? 'isOpen' : 'isClosed'}>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/sign-in'>Login</Link>
              </div>
            </div>

            
        </div>


        
    </div>
    )
}

export default Navigation;