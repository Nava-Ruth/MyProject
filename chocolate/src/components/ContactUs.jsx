import React from 'react';
import './ContactUs';
import Swal from 'sweetalert2';

function ContactUs() {
  const divStyle = {
    backgroundImage: `url("/images/bak.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "87vh",
    padding: "20px",
  };

  const mas = (event) => {
    event.preventDefault(); 

    Swal.fire({
      position: "center",
      icon: "success",
      title: "פניתך היתקבלה ",
      showConfirmButton: false,
      timer: 1300,
      customClass: {
        popup: "custom-swal", 
      },
    });
  };

  return (
    <div style={divStyle}>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <form onSubmit={mas}>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
          <label>Message:</label>
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
