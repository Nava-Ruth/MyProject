import React from 'react';
import './styles.css'; // לוודא שה-CSS מחובר
import { useNavigate } from 'react-router-dom';

function AboutUs() {

  const nav = useNavigate();

  const move = () => {
   nav("/Product")
  }
  return (
    <div className="about-container">
      <h1>אודותינו</h1>
      <p>
        <span>ברוכים הבאים</span> לחנות שלנו, המקום המושלם לכל אוהבי השוקולד. אנו מתמחים בפרלינים בעבודת יד, שוקולדים איכותיים ומגוון רחב של פינוקים מושקעים.
      </p>
      <p>
        המוצרים שלנו מיוצרים באהבה, עם דגש על איכות בלתי מתפשרת ועיצוב ייחודי. החנות שלנו נועדה לתת לכם את החוויה המתוקה ביותר, באווירה חמימה ומפנקת.
      </p>
      <img src="/images/1.jpg" alt="חנות שוקולדים" />
      <br />

      <button onClick={()=>move()}>התחל קנייה</button>

    </div>
  );
}

export default AboutUs;