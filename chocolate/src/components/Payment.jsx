import React from 'react';
import { useContext } from 'react';
import MyContex from '../Context/context';
import Swal from 'sweetalert2';
import  '../css/pay.css'

function Payment({ cart, calculateTotal }) {
  const { currentUser } = useContext(MyContex);

  const pay = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "התשלום בוצעה בהצלחה",
      showConfirmButton: false,
      timer: 1300,
      customClass: {
        popup: "custom-swal",
      }
    });
  }

  return (
    <div className="payment">
      <div className="user-details">
        <h1>{!currentUser ? ("אינך מחובר") : (currentUser.name)}</h1>
        <p>כתובת: עוזיאל 98 |  קומה:5  | עיר :ירושלים </p>

      </div>

      <div className="cart-details">
        <h1>פרטי הזמנה</h1>

        {cart.length === 0 ? (
          <div className="cart-empty">העגלה ריקה</div>
        ) : (
          cart.map((product, index) => (
            <div key={`${product.id}-${index}`} className="cart-item">
              <img src={`/images/${product.image}`} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))
        )}
      </div>

      <div className="payment-summary">
        <strong>סה"כ לתשלום: {calculateTotal()}</strong>
        <button onClick={pay}>תשלום</button>
      </div>
    </div>
  );
}

export default Payment;
