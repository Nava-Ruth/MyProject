
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Payment from './Payment';
import ContactUs from './ContactUs';
import Product from './Product';
import Details from './Details';
import Cart from './Cart';
import Profile from './Profile';
import Log from './Log';


//מקבל פונקציןת ומערך שיעביר כפרופס
export const Routing = ({ addToCart, cart, removeFromCart ,calculateTotal}) => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/details/:image/:id/:name/:price" element={<Details addToCart={addToCart}/>} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Product" element={<Product addToCart={addToCart}/>} />
      <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal}/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/log" element={<Log/>}/> 
      <Route path="*" element={<><h1>404 Not Found</h1></>} />
    </Routes>
  );
};
