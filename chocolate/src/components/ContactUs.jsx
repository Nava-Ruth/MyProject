
import React from 'react';
import './ContactUs';
  
function ContactUs() {

  
  const mas=()=>{
    alert("פניתך  יתקבלה "); 
  }

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Message:</label>
        <textarea placeholder="Your message"></textarea>
        <button type="submit" onClick={mas}>Send</button>
      </form>
    </div>
  );
}

export default ContactUs;