
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Cart({ cart = [], removeFromCart, calculateTotal }) {


  const nav = useNavigate();

  const move = () => {
    nav("/payment")
   }


  // שמירת הכמויות של המוצרים בסל
  const [quty, setQuty] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1; // כמות התחלתית של 1 לכל מוצר
      return acc;
    }, {})
  );

  // פונקציה להגדלת הכמות
  const increaseQuty = (id) => {
    setQuty((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // פונקציה להקטנת הכמות
  const decreaseQuty = (id) => {
    setQuty((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1), // הכמות לא יורדת מתחת ל-1
    }));
  };

  // מחשבים את הסכום הכולל
  const total = cart.reduce((sum, product) => {
    return sum + product.price * quty[product.id];
  }, 0);

  return (
    <div>
      <h2 className="cart-title">הסל שלך</h2>
      <div className="cart-container">
        <ul className="cart-list">
          {cart.length === 0 ? (
            <li className="cart-empty">העגלה ריקה</li>
          ) : (
            cart.map((product, index) => (
              <li className="cart-item" key={`${product.id}-${index}`}>
                <img src={`/images/${product.image}`} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price} ₪</p>

                <button className="quantity-btn" onClick={() => decreaseQuty(product.id)}>
                  -
                </button>
                <span className="quantity-value">{quty[product.id]}</span>
                <button className="quantity-btn" onClick={() => increaseQuty(product.id)}>
                  +
                </button>

                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  מחיקה
                </button>
              </li>
            ))
          )}
        </ul>

        <button className='pasButton' onClick={()=>move()}>עבור לתשלום</button>
        <strong>סה"כ לתשלום:{calculateTotal()}</strong> 
       
      </div>
      
    </div>

    
  );
}

export default Cart;
