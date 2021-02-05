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
    <section className="contact">
      <h2> Contact </h2>
      <div className="contact-hr"></div>
      <span className="contact-highlight">
        Have a question or want to work together ?
      </span>

      {success ? (
        <p className="text-success"> Thanks for your message! </p>
      ) : (
        <> </>
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
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
