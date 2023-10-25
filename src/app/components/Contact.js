"use client";

import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  useEffect(() => {
    const getContact = async () => {
      const response = await fetch("/contact.json");
      const data = await response.json();
      setEmail(data.email);
      setLinkedIn(data.linkedIn);
    };
    getContact();
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-wrapper">
        <p>Thank you for visiting my portfolio website</p>
        <p>Feel free to contact me!</p>
        <div>
          <a href={email} title="My email address">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href={linkedIn} title="Link to my LinkedIn Account">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
