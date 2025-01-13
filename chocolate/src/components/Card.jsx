 


import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import MyContex from "../Context/context";

function Card({ product, addToCart,remove }) {
  
  const {currentUser}=useContext(MyContex);

  


  if (!product || !product.image || !product.name || !product.id || !product.price) {
    return <div>המידע על המוצר אינו זמין</div>;
  }

  return (
    <div className="card">
     
      <img src={`/images/${product.image}`} alt={product.name} />
      <p>{product.name}</p>
      <div className="card-actions">
        <Link to={`/details/${product.image}/${product.id}/${product.name}/${product.price}`}>
          לפרטים נוספים
        </Link>
        
        {currentUser?.rool === "manager" 
  ? (
      <button className="add-to-cart-btn" onClick={() => remove(product.id)}>
        <AiOutlineClose size={20} />
      </button>
    )
  : (
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        <FaShoppingCart />
      </button>
    )
}

        
        
        
      </div>
    </div>
  );
}

export default Card;
