// // function Cart({ cart = [], removeFromCart }) {

// //   const count=1;

// //   const add=()=>{
// //     count++;
// //   }

// //     return (
// //       <div>
// //         <h2 className="cart-title">הסל שלך</h2>
// //         <div className="cart-container">
// //         <ul className="cart-list">
// //           {cart.length === 0 ? (
// //             <li className="cart-empty">העגלה ריקה</li>
// //           ) : (
// //             cart.map((product, index) => (
// //               <li className="cart-item" key={`${product.id}-${index}`}>
// //                 {/* הצגת התמונה של המוצר */}
// //                 <img src={`/images/${product.image}`} alt={product.name} />
// //                 {product.name} - {product.price}
// //                 <p>count+{count}</p>
// //                 <button className="remove-from-cart-btn" onClick={() => removeFromCart(product.id)}>מחיקה</button>
// //                 <button className="plus" onClick={() => add(product.id)}>+</button>
// //               </li>
// //             ))
// //           )}
// //         </ul>
// //         </div>
// //       </div>
// //     );
// //   }

// //   export default Cart;

// import React, { useState } from 'react';


// function Cart({ cart = [], removeFromCart ,calculateTotal}) {

//   // שמירת הכמויות של המוצרים בסל
//   const [quty, setQuty] = useState(
//     cart.reduce((acc, product) => {
//       acc[product.id] = 1; // כמות התחלתית של 1 לכל מוצר
//       return acc;
//     }, {})
//   );

//   // פונקציה להגדלת הכמות
//   const decriseQuty = (id) => {
//     setQuty((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   // פונקציה להקטנת הכמות
//   const reduseQuty = (id) => {
//     setQuty((prev) => ({
//       ...prev,
//       [id]: Math.max(prev[id] - 1, 1), // הכמות לא יורדת מתחת ל-1
//     }));
//   };

//   const sum=calculateTotal();

//   return (
//     <div>
//       <h2 className="cart-title">הסל שלך</h2>
//       <div className="cart-container">
//         <ul className="cart-list">
//           {cart.length === 0 ? (
//             <li className="cart-empty">העגלה ריקה</li>
//           ) : (
//             cart.map((product, index) => (
//               <li className="cart-item" key={`${product.id}-${index}`}>

//                 <img src={`/images/${product.image}`} alt={product.name} />
//                 <p>{product.name}</p>
//                 <p>{product.price} ₪</p>

//                 <button className="quantity-btn" onClick={() => reduseQuty(product.id)}>
//                   -
//                 </button>
//                 <span className="quantity-value">{quty[product.id]}</span>

//                 <button className="quantity-btn" onClick={() => decriseQuty(product.id)}>
//                   +
//                 </button>


//                 <button className="remove-from-cart-btn" onClick={() => removeFromCart(product.id)}>
//                   מחיקה
//                 </button>
//               </li>
//             ))
//           )}
//         </ul>

//        <span>sum</span>

//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useState } from 'react';

function Cart({ cart = [], removeFromCart, calculateTotal }) {
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


        <strong>סה"כ לתשלום:{calculateTotal()}</strong> 

      </div>
    </div>
  );
}

export default Cart;
