import React from "react";
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Contact US</h1>
        <form id="contact-form" method="POST">
          {/* <label htmlFor="name">Full Name</label> */}
          <input type="text" placeholder="Enter full name" name="name" />
          {/* <label htmlFor="email">Email</label> */}
          <input name="email" placeholder="Enter your email" type="email" />
          {/* <label htmlFor="message">Message</label> */}
          <textarea rows="6" placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
