
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';  
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import MyContex from "../Context/context";

//מקבל ממוצרים דרך הראוטינג בפרופס
function Card({ product, addToCart, remove }) {
  // יבוא משתמש מקונטקסט
  const { currentUser } = useContext(MyContex);

  if (!product || !product.image || !product.name || !product.id || !product.price) {
    return <div>המידע על המוצר אינו זמין</div>;
  }

  return (
    <div className="card">
      {/* //שירשור המידע על המוצר */}
      <img src={`/images/${product.image}`} alt={product.name} />
      <p>{product.name}</p>
      <div className="card-actions">
        <Link to={`/details/${product.image}/${product.id}/${product.name}/${product.price}`}>
          לפרטים נוספים
        </Link>

        {/* //למנהל יוצג כפתור מחק למשתמש הוסף לסל */}
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
