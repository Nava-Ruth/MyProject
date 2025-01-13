
import React from 'react';
import './styles.css'; // לוודא שה-CSS מחובר
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const nav = useNavigate();

  const move = () => {
    nav("/Product");
  };

  return (
    <div className="about-page">
      {/* <header className="about-header">
        <h1>אודות</h1>
      </header> */}

      {/* הסרטון עם מסגרת יפה */}
      <div className="video-frame">
        <video autoPlay loop muted className="hero-video">
          <source src="/videos/a.mp4" type="video/mp4" />
          
        </video>
        <div className="about-header">
          <h2>אודותינו</h2>
        </div>
      </div>

      {/* טקסט מתחת לסרטון */}
      <div className="about-text">
        <p>
        ברוכים הבאים לבוטיק השוקולד שלנו! כאן, כל פרלין ושוקולד מיוצרים בעבודת יד ובאהבה, עם טעמים מפתיעים וחומרים איכותיים. 
          <br />
        אנחנו מזמינים אתכם לחוות חוויה מתוקה ומפנקת, 
        ולהתענג על שוקולדים שיכבשו את הלב.


       
       
        </p>
      </div>
      <button className="taste-button" onClick={() => nav("/Product")}>
      !חייב לטעום את התענוג הזה <span className="arrow-icon">→</span>
  </button>
    </div>
  );
}

export default AboutUs;
