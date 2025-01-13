
import React, { useContext } from 'react';
import MyContex from '../Context/context';
import './profil.css'; 
 

function Profile() {

  const user = useContext(MyContex).currentUser?.name ||"אורח";
  
  return (
    <div className="profile-page">
    {/* Header */}
    <header className="profile-header">
      <h1>החשבון האישי שלך <p>{user}</p></h1>
    </header>

    {/* Order Section */}
    <section className="orders">
      <h2>ההזמנות שלי</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>מספר הזמנה</th>
            <th>תאריך</th>
            <th>סטטוס</th>
            <th>סכום</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>01/01/2025</td>
            <td>ממתינה לאישור</td>
            <td>₪120</td>
          </tr>
          <tr>
            <td>1002</td>
            <td>05/01/2025</td>
            <td>הוזמן בהצלחה</td>
            <td>₪150</td>
          </tr>
          <tr>
            <td>1003</td>
            <td>10/01/2025</td>
            <td>נשלח</td>
            <td>₪200</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* Cart Section */}
    <section className="car">
      <h2>הסל שלי</h2>
      <div className="car-items">
        <div className="car-item">
          <img src="/images/1.jpg" />
        </div>
        <div className="car-item">
          <img src="/images/4.jpg"/>
        </div> <div className="car-item">
          <img src="/images/11.jpg" />
        </div>
        <div className="car-item">
          <img src="/images/8.jpg" />
        </div>
      </div>
      <button className="checkout-button">לסיום ההזמנה</button>
    </section>
  </div>
  );
}

export default Profile;
