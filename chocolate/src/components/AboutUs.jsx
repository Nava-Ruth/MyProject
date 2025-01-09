import React from 'react';
import './styles.css'; // לוודא שה-CSS מחובר

function AboutUs() {
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
      <a href="/Product" className="buy-now-btn">
        התחל קנייה
      </a>
    </div>
  );
}

export default AboutUs;