
import { Route, Routes,Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Payment from './Payment';
import ContactUs from './ContactUs';
import Product from './Product';
import Details from './Details';
import Cart from './Cart';
import Profile from './Profile';
import Log from './Log';
import UserManager from './UserManager';


//מקבל פונקציןת ומערך שיעביר כפרופס
export const Routing = ({ addToCart, cart, removeFromCart, calculateTotal,products }) => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/details/:image/:id/:name/:price" element={<Details addToCart={addToCart} />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Product" element={<Product addToCart={addToCart} products={products} />} />
      <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/log" element={<Log />} />
      <Route path="/users" element={<UserManager />} />

      <Route path="*" element={<><h1>404 Not Found</h1></>} />
    </Routes>
  );
};
