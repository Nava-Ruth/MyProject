import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const divStyle = {
    backgroundImage: `url("/images/bak.png")`, 
  };

  const nav=useNavigate();

  const move=()=>{
    nav("/product");
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={divStyle}>
  <div className="hero-text">
    <h1>ברוכים הבאים ל-ChocoBoutique</h1>
    <p>תתפנקו בשוקולדים יוקרתיים, מעשה ידינו במיוחד בשבילכם.</p>
    <button className="cta-button" onClick={()=>move()}>קנה עכשיו</button>
  </div>
</section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Favorites</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="/images/11.jpg"/>
            <h3>Dark Chocolate Truffles</h3>
            <p>Rich and decadent flavors.</p>
          </div>
          <div className="product-card">
            <img src="/images/10.jpg"/>
            <h3>Milk Chocolate Bars</h3>
            <p>Smooth and creamy goodness.</p>
          </div>
          <div className="product-card">
            <img src="/images/9.jpg"/>
            <h3>Vegan Delights</h3>
            <p>Plant-based perfection.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At ChocoBoutique, we craft artisanal chocolates with the finest ingredients.  
          Sustainability and quality are at the heart of everything we do.  
        </p>
      </section>
    </div>
  );
}

export default HomePage;