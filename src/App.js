import './App.css';
import React, { useState} from 'react';
import Navigation from './Navigation';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import SignIn from './components/SignIn';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Footer from './Footer';
import Checkout from './components/Checkout';




function App() {
 
  const [cartItems, setCartItems] = useState([])
  

  const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1}]);
      }
    };
 
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    

    
  
    

  return(
    <div>
    
    
    <Navigation onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
    
    <Routes>        
                    
                    <Route exact path='/' element={<Shop onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/sign-in' element={<SignIn />} />
                    <Route exact path='/account' element={<Account />} />
                    <Route exact path='/product-page/:id' element={<ProductPage onAdd={onAdd} cartItems={cartItems} />} />
                    <Route exact path='/checkout' element={<Checkout onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />} />
                    
                    
                    
      </Routes>
     
    <Footer />
   
    


    </div>
  )
}

export default App;
