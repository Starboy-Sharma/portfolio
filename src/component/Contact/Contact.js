import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2> Contact </h2>
      <div className="contact-hr"></div>
      <span className="contact-highlight">
        Have a question or want to work together ?
      </span>

      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form name="contact" method="post" className="contact-form">
        <input type="hidden" name="form-name" value="contact" />
        <input placeholder="Name" type="text" name="name" required />
        <input placeholder="Email" type="email" name="name" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
