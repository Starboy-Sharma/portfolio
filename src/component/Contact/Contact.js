import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <span className="contact-highlight">
          Have a question or want to discuss a project? Let's build something exceptional together.
        </span>

        {success && (
          <p className="text-success">Thanks for your message! I'll get back to you soon.</p>
        )}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          action="/?success=true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input placeholder="Name" type="text" name="name" required />
          <input placeholder="Email" type="email" name="email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
